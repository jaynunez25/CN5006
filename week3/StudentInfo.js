const DateOfBirth = "12/12/1980" 

const getStudentName = () => {

    return "write your name here"
}

const getCampusName = () => {

    return ("UEL Campus")
}
exports.getDOB=DateOfBirth
exports.getName=getStudentName
exports.Location=getCampusName 

exports.Studentgrade=(marks)=>{
    if (marks >50 && marks <70) 
        
        return ("B grade")
    else 
        return
        ("A grade")
        
}


