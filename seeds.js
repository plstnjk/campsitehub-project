var mongoose = require("mongoose");
var Camp = require("./models/camp");
var Comment = require("./models/comment");

var data = [
    {
        name: "Trevor Noah",
        location: "Toronto, Canada",
        price: "11.00",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff76",
            username: "JackBlack"
        }
    },
    {
        name: "Abraham Lincoln Hill",
        location: "Stockholm, Sweden",
        price: "10.00",
        image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff72",
            username: "SteveCarell"
        }
    },
    {
        name: "Yellowstone Park",
        location: "Vienna, Austria",
        price: "15.00",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff73",
            username: "TrevorNoah"
        }
    },
    {
        name: "Nanda Parbat",
        location: "Madrid, Spain",
        price: "13.99",
        image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff77",
            username: "JohnSmith"
        }
    },
    {
        name: "Serenghetti Camp",
        location: "Mumbai, India",
        price: "9.99",
        image: "https://images.unsplash.com/photo-1526011881888-8dba3f788ede?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff78",
            username: "JohnSmith"
        }
    },
    {
        name: "Lian Yu",
        location: "Tokio, Japan",
        price: "16.95",
        image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff79",
            username: "JohnSmith"
        }
    },
    {
        name: "Clouds Rest",
        location: "South Park, Colorado",
        price: "10.99",
        image: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff80",
            username: "JohnSmith"
        }
    },
    {
        name: "Devil's Hill",
        location: "Lisbon, Portugal",
        price: "12.05",
        image: "https://images.unsplash.com/photo-1526064965790-830f5207ab7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author:
        {
            id: "588c2e092403d111454fff81",
            username: "JohnSmith"
        }
    }
];

// var commentsArray = [

// ];

function seedDB() {
    // Remove all camps
    Camp.deleteMany({}, (error) => {
        if (error) {
            console.log(error);
        }
        console.log("All camps removed successfully.");
        // Remove all comments
        Comment.deleteMany({}, (error) => {
            if (error) {
                console.log(error);
            }
            console.log("All comments removed successfully.");
            // Add new camps
            data.forEach((camp) => {
                Camp.create(camp, (error, campground) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("The camp was successfully added to the DB.");
                        // Add new comment
                        // commentsArray.forEach((comment) => {
                        Comment.create(
                            {
                                author:
                                {
                                    id: "588c2e092403d111454fff76",
                                    username: "JohnDoe"
                                },
                                content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }, (error, comment) => {
                                if (error) {
                                    console.log(error);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("The comment was successfully created.")
                                }
                            });
                    }
                })
                // }
            });
        });
    });

    // Add new comments
}

module.exports = seedDB;

