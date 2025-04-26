<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@mithaliart.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    
    $name = $_POST['name'];
    $partner_name = $_POST['partner_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $message = $_POST['message'];
    
    $email_body = "You have received a new message:\n\n" .
        "Name: $name\n" .
        "Partner's Name: $partner_name\n" .
        "Email: $email\n" .
        "Phone: $phone\n" .
        "Wedding Date: $date\n\n" .
        "Message:\n$message";
    
    $headers = "From: $email";
    
    if(mail($to, $subject, $email_body, $headers)) {
        echo "<script>
            alert('Thank you for your message. We will get back to you soon!');
            window.location.href = 'contact.html';
        </script>";
    } else {
        echo "<script>
            alert('Sorry, there was an error sending your message. Please try again later.');
            window.location.href = 'contact.html';
        </script>";
    }
}
?>