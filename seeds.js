const mongoose = require("mongoose");
const Campground = require("./models/campgrounds");
const Comment = require("./models/comment");

const data = [
    {
        name: "A Rabbit", 
        image: "https://images.pexels.com/photos/4588428/pexels-photo-4588428.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "A very beautiful rabbit on glasses pretending to be reading a book"
    },
    {
        name: "A Beautiful Rabbit", 
        image: "https://images.pexels.com/photos/4588428/pexels-photo-4588428.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "A very beautiful rabbit on glasses pretending to be reading a book"
    },
    {
        name: "A car", 
        image: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "A car parked in a valley"
    }
]

function seedDB(){
//   Remove all campgrounds
  Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, But i wish there was internet",
                            author: "Stephen"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    // add a few comments
}

module.exports = seedDB;