const express = require("express");

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

// Variable to store data of the available rooms
let rooms = [{
    room_id: 1,
    number_of_seats: 6,
    price_per_hour: 1500,
    amenities: ["TV"],
}, ];

// Variable to store customer details
let customers = [{
    customer_name: "priya",
    date: "2020-11-30",
    start_time: "12:00",
    end_time: "16:00",
    room_id: 1,
}, ];

// Variable to store timing of the last order by a customer
let customerBookingTime = [{
    customer_name: "priya",
    datetime: "2020-11-25T16:40:30.000Z",
}, ];

// Variable to store booked data of the rooms
let roomBookedData = [{
    room_id: 1,
    booked_status: true,
    customer_name: "priya",
    date: "2020-11-25",
    start_time: "12:00",
    end_time: "16:00",
}, ];

// We use this GET method to get the list of rooms available in this app
app.get("/list-rooms", (req, res) => {
    try {
        res.status(200).json({
            message: "List of rooms with booked data",
            roomBookedData,
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// We use this GET method to get the list of available customer data in this app
app.get("/customer-data", (req, res) => {
    try {
        res.status(200).json({
            message: "List of customer data with booking details",
            customers,
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// We use this POST method to create a room which is not yet available in the app
app.post("/create-room", (req, res) => {
    try {
        // Finding the room id from the request
        let room_id = roomBookedData.findIndex(
            (data) => data.room_id == req.body.room_id
        );
        // Checking whether the id alredy exists or not
        if (room_id == -1) {
            rooms.push(req.body);
            roomBookedData.push({
                room_id: req.body.room_id,
                booked_status: false,
            });
            res.status(200).json({ message: "Room created" });
        } else {
            res.status(409).json({
                message: "Room with same id already exists",
            });
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// We use this POST method to book the already available room which is not booked
app.post("/book-room", (req, res) => {
    try {
        let id = req.body.room_id;
        let index = roomBookedData.findIndex((data) => data.room_id == id);
        // Getting the room id and checking whether the room is already booked or not
        if (roomBookedData[index].booked_status == false) {
            let custIndex = customerBookingTime.findIndex(
                (data) => data.customer_name == req.body.customer_name
            );
            // Finding if the customer already exists in the app or not
            if (custIndex != -1) {
                let now = new Date();
                let lastBooking = new Date(
                    customerBookingTime[custIndex].datetime
                );
                // Checking the customers last booking is greater than one hour
                if (now - lastBooking >= 3600000) {
                    // adding customer and assigning values to the variables
                    customers.push(req.body);
                    customerBookingTime[custIndex].datetime = now;
                    roomBookedData[index].booked_status = true;
                    roomBookedData[index].customer_name =
                        req.body.customer_name;
                    roomBookedData[index].date = req.body.date;
                    roomBookedData[index].start_time = req.body.start_time;
                    roomBookedData[index].end_time = req.body.end_time;

                    res.status(200).json({
                        message: "Room booked successfully",
                    });
                } else {
                    res.status(406).json({
                        message: "You must wait an hour atleast to book another room",
                    });
                }
                // if the customer not exists
            } else {
                customerBookingTime.push({
                    customer_name: req.body.customer_name,
                    datetime: new Date(),
                });
                customers.push(req.body);
                roomBookedData[index].booked_status = true;
                roomBookedData[index].customer_name = req.body.customer_name;
                roomBookedData[index].date = req.body.date;
                roomBookedData[index].start_time = req.body.start_time;
                roomBookedData[index].end_time = req.body.end_time;
                res.status(200).json({ message: "Room booked successfully" });
            }
        } else {
            res.status(409).json({ message: "Room already booked" });
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});