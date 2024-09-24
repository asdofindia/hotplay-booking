import { useRouter } from "next/router";
import { BookingClient, Analytics } from "@proto/booking/booking"
import { credentials } from "@grpc/grpc-js";

export const getServerSideProps = (async ({query}) => {
    const client = new BookingClient("localhost:50051", credentials.createInsecure())
    const analytics: Analytics = {
        properties: query
    }
    client.track(analytics, (err, resp) => {
        if (err) {
            console.error(err)
        } else {
            console.log(resp)
        }
    });
    return { props: { tracking: `DONE Tracking ${JSON.stringify(query)}`}}
  })
  

export default function Page({tracking}) {
    const router = useRouter();
    return (
        <div>
            Event: {router.query.eventId}
            <br/>
            {tracking}
        </div>
    );
}
