package main

import (
	"context"
	"encoding/json"
	"log"
	"net"
	"time"

	pb "api/protobuf/booking/booking"

	"github.com/nats-io/nats.go"
	"google.golang.org/grpc"
	// "github.com/golang/protobuf/proto"
)

type server struct {
	pb.UnimplementedBookingServer
	nc *nats.Conn
}

func NewNatsConnection() *nats.Conn {
	nc, err := nats.Connect(nats.DefaultURL)
	if err != nil {
		log.Fatalf("Failed to create default connection: %v\n", err)
		return nil
	}
	return nc
}

func (s *server) Track(ctx context.Context, req *pb.Analytics) (*pb.TrackingResult, error) {
	log.Printf("Received Analytics event with properties: %v", req.Properties)
	propertiesJSON, err := json.Marshal(req.Properties)
	if err != nil {
		log.Printf("Failed to serialize properties: %v", err)
		return nil, err
	}
	if err := s.nc.Publish("track.analytics", propertiesJSON); err != nil {
		log.Printf("Failed to publish Track event to NATS: %v", err)
	}
	return &pb.TrackingResult{}, nil
}

func (s *server) Reserve(ctx context.Context, req *pb.OrderNeeded) (*pb.OrderCreated, error) {
	log.Printf("Reserving tickets: SessionID: %s, EmailID: %s, Number of Tickets: %d", req.SessionId, req.EmailId, req.NumberOfTickets)
	return &pb.OrderCreated{
		OrderId: "order123",
	}, nil
}

func (s *server) Pay(ctx context.Context, req *pb.PaymentNeeded) (*pb.Receipt, error) {
	log.Printf("Processing payment for OrderID: %s, Amount: %f", req.OrderId, req.Amount)
	return &pb.Receipt{
		ReceiptId:   "receipt123",
		OrderId:     req.OrderId,
		TotalAmount: req.Amount,
		PaymentTime: nil,
	}, nil
}

func (s *server) Ticket(ctx context.Context, req *pb.TicketNeed) (*pb.Ticket, error) {
	log.Printf("Generating ticket for OrderID: %s", req.OrderId)
	return &pb.Ticket{
		OrderId:     "ticket123",
		EventId:     "event123",
		SeatNumbers: []int32{12, 13},
	}, nil
}

func main() {
	nc := NewNatsConnection()
	defer nc.Close()

	go func() {
		lis, err := net.Listen("tcp", ":50051")
		if err != nil {
			log.Fatalf("Failed to listen: %v", err)
		}

		s := grpc.NewServer()
		pb.RegisterBookingServer(s, &server{nc: nc})

		log.Printf("Server is listening on port 50051...")
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Failed to serve: %v", err)
		}
	}()

	// Keep the main routine running to maintain NATS connection
	for {
		time.Sleep(10 * time.Second)
	}
}
