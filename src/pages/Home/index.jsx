import React from "react";
import { Message } from "../../components";
import { DialogItem } from "../../components";

import "./Home.scss";

const Home = () => (
    <section className="home">
        <div className="dialog">
            <DialogItem user = {{
                fullname: "Nurel",
                isOnline: false
            }}
                unread={0}
                online
            />
            <DialogItem user = {{
                fullname: "Nurel",
                isOnline: false
            }}
                unread={0}
                online
            />
            <DialogItem user = {{
                fullname: "Nurel",
                isOnline: true
            }}
                unread={0}
                online
            />
        </div>
        {/*<DialogList items={[
            {
                user: {
                    fullname: 'kasiet',
                    avatar: null
                },
                message: {
                    text: 'You re so much stronger than your excuses.',
                    isRead: false,
                }
            }
        ]}/>
        <Message 
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnE8a3nzWVDdztnS04rKBFOR6v-q01LHT1g&usqp=CAU"
            text="Hello my darling"
            date="Sun Apr 04 2021 15:28:35"
        />
        {/*<Message 
            avatar="https://consequenceofsound.net/wp-content/uploads/2019/05/pikachu-e1557247424342.jpg?quality=80"
            text="Hello my dear"
            date="Sun Apr 04 2021 15:28:35"
            isMe={true}
            isRead={true}
        />
        <Message 
            avatar="https://consequenceofsound.net/wp-content/uploads/2019/05/pikachu-e1557247424342.jpg?quality=80"
            date="Sun Apr 04 2021 15:28:35"
            attachment = {[
                {
                    filename: "img-1.jpeg",
                    url: "https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_large"
                },
            ]}
        />
        <Message 
            avatar="https://consequenceofsound.net/wp-content/uploads/2019/05/pikachu-e1557247424342.jpg?quality=80"
            date="Sun Apr 04 2021 15:28:35"
            isTyping
        />*/}
    </section>
);

export default Home;