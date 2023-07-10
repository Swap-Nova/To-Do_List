exports.getDate = () => {
    const today = new Date();
    
    // method to print day and date
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-US", options);
};

exports.getDay = () => {
    const today = new Date();
    
    // method to print day
    const options = {
        weekday: "long"
    };
    
    return today.toLocaleDateString("en-US", options);
};

// module.exports.getDate = getDate;
// module.exports.getDay = getDay; 