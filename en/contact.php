<?php
require 'vendor/autoload.php'; // Ensure PHPMailer is loaded

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and validate input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['msg']);

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Gmail SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mohammedkoudsi48@gmail.com';
        $mail->Password = 'ettstouvnpqgslpf';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Set sender and recipient
        $mail->setFrom($email, 'New inquiry');
        $mail->addAddress('mohammedkoudsi48@gmail.com', $email); // Replace with the recipient's email

        // Set email subject and body (HTML format)
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Body = "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <title>$subject</title>
        </head>
        <body>
            <h1>New message</h1>
            <h3>Name: $name</h3>
            <h3>Email: $email</h3>
            <h3>Phone number: $phone</h3>
            <h3>Message: $message</h3>
        </body>
        </html>
        ";

        // Send the email and check if it's sent successfully
        if ($mail->send()) {
            // Show a popup on success (this would be part of your page's JS)
            echo "<script>
                    const popup = document.querySelector('.popup');
                    popup.style.display = 'block';
                  </script>";
            header("Location: index.html");
        } else {
            echo "<script>alert('فشل في إرسال الرسالة');</script>";
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>