<?php
// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Collect form data
    $firstname = $_POST['firstname'] ?? '';
    $middlename = $_POST['middlename'] ?? '';
    $lastname = $_POST['lastname'] ?? '';
    $ssn = $_POST['ssn'] ?? '';
    $birthday = $_POST['birthday'] ?? '';
    $driverslicense = $_POST['driverslicense'] ?? '';
    $driverslicensestate = $_POST['driverslicensestate'] ?? '';
    $streetaddress = $_POST['streetaddress'] ?? '';
    $city = $_POST['city'] ?? '';
    $state = $_POST['state'] ?? '';
    $zipcode = $_POST['zipcode'] ?? '';
    $phonenumber = $_POST['phonenumber'] ?? '';
    $monthlyincome = $_POST['monthlyincome'] ?? '';
    $residencetime = $_POST['residencetime'] ?? '';
    $currentemployment = $_POST['currentemployment'] ?? '';
    $lengthofemployment = $_POST['lengthofemployment'] ?? '';
    $creditmessage = $_POST['creditmessage'] ?? '';
    
    // Validate and sanitize inputs if needed
    // Example: $firstname = htmlspecialchars(trim($firstname));
    
    // Email information
    $to_email = "droidking001@gmail.com"; // Replace with your email address
    $subject = "Credit Application Submission";
    $message = "First Name: $firstname\n";
    $message .= "Middle Name: $middlename\n";
    $message .= "Last Name: $lastname\n";
    $message .= "Social Security Number: $ssn\n";
    $message .= "Birthday: $birthday\n";
    $message .= "Driver's License Number: $driverslicense\n";
    $message .= "License Issuing State: $driverslicensestate\n";
    $message .= "Street Address: $streetaddress\n";
    $message .= "City: $city\n";
    $message .= "State: $state\n";
    $message .= "Zip Code: $zipcode\n";
    $message .= "Phone Number: $phonenumber\n";
    $message .= "Pre Tax Income: $monthlyincome\n";
    $message .= "Time At Residence: $residencetime\n";
    $message .= "Current Employment: $currentemployment\n";
    $message .= "Length of Employment: $lengthofemployment\n";
    $message .= "Comments: $creditmessage\n";
    
    // Additional headers
    $headers = "From: noreply@elbertmotors.com"; // Replace with a valid sender email address
    
    // Send email
    if (mail($to_email, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }

} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
