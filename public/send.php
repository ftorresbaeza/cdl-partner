<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Metodo no permitido']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'] ?? '';
$telefono = $data['telefono'] ?? '';
$email = $data['email'] ?? '';
$servicio = $data['servicio'] ?? '';
$mensaje = $data['mensaje'] ?? '';

if (!$nombre || !$email || !$mensaje) {
    echo json_encode(['error' => 'Faltan datos requeridos']);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$fecha = date('d-m-Y H:i');

try {
    // Configuracion SMTP
    $mail->isSMTP();
    $mail->Host       = 'mail.cdlpartner.cl';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'daniela@cdlpartner.cl';
    $mail->Password   = 'Daniela2025@';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Correo a Daniela
    $mail->setFrom('daniela@cdlpartner.cl', 'CDL Partner - Web');
    $mail->addAddress('daniela@cdlpartner.cl');
    $mail->Subject = "Nuevo contacto desde web: $nombre";
    $mail->isHTML(true);
    $mail->Body = '
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: "Segoe UI", Tahoma, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0891b2, #14b8a6); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; }
        .header p { color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px; }
        .content { padding: 30px; }
        .badge { display: inline-block; background: #ecfeff; color: #0891b2; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 20px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
        .info-box { background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #0891b2; }
        .info-box label { display: block; color: #64748b; font-size: 12px; margin-bottom: 4px; }
        .info-box span { color: #0f172a; font-weight: 600; font-size: 15px; }
        .message-box { background: #f8fafc; padding: 20px; border-radius: 10px; margin-top: 20px; }
        .message-box h3 { margin: 0 0 10px 0; color: #0f172a; font-size: 16px; }
        .message-box p { margin: 0; color: #475569; line-height: 1.6; }
        .footer { background: #0f172a; padding: 20px; text-align: center; }
        .footer p { color: #94a3b8; margin: 0; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nuevo Contacto desde Web</h1>
          <p>CDL Partner - Servicios de Limpieza</p>
        </div>
        <div class="content">
          <div class="badge">'.($servicio ?: 'Consulta general').'</div>
          <div class="info-grid">
            <div class="info-box"><label>Nombre</label><span>'.$nombre.'</span></div>
            <div class="info-box"><label>Email</label><span>'.$email.'</span></div>
            <div class="info-box"><label>Telefono</label><span>'.$telefono.'</span></div>
            <div class="info-box"><label>Fecha</label><span>'.$fecha.'</span></div>
          </div>
          <div class="message-box">
            <h3>Mensaje del cliente:</h3>
            <p>'.$mensaje.'</p>
          </div>
        </div>
        <div class="footer"><p>CDL Partner - www.cdlpartner.cl</p></div>
      </div>
    </body>
    </html>';

    $mail->send();

    // Correo de confirmacion al cliente
    $mail->clearAddresses();
    $mail->addAddress($email);
    $mail->Subject = "Confirmacion de contacto - CDL Partner";
    $mail->Body = '
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: "Segoe UI", Tahoma, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0891b2, #14b8a6); padding: 40px 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px; }
        .content { padding: 40px 30px; text-align: center; }
        .content h2 { color: #0f172a; margin: 0 0 20px 0; font-size: 22px; }
        .content p { color: #475569; line-height: 1.8; margin: 0 0 20px 0; }
        .nombre { color: #0891b2; font-weight: 700; }
        .services { background: #f8fafc; border-radius: 12px; padding: 25px; margin: 25px 0; text-align: left; }
        .services h3 { color: #0f172a; margin: 0 0 15px 0; font-size: 16px; }
        .services ul { margin: 0; padding: 0 0 0 20px; color: #475569; }
        .services li { margin-bottom: 8px; }
        .cta { display: inline-block; background: linear-gradient(135deg, #0891b2, #14b8a6); color: white; padding: 16px 32px; border-radius: 30px; text-decoration: none; font-weight: 600; margin-top: 20px; }
        .footer { background: #0f172a; padding: 30px; text-align: center; }
        .footer p { color: #94a3b8; margin: 0; font-size: 13px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Gracias por contactarnos!</h1>
          <p>CDL Partner - Tu socio en limpieza profesional</p>
        </div>
        <div class="content">
          <h2>Hola <span class="nombre">'.$nombre.'</span>!</h2>
          <p>Hemos recibido tu mensaje correctamente. Nuestro equipo te contactara a la brevedad para entregarte una cotizacion personalizada.</p>
          <div class="services">
            <h3>Tu solicitud:</h3>
            <ul>
              <li><strong>Servicio:</strong> '.($servicio ?: 'Consulta general').'</li>
              <li><strong>Mensaje:</strong> '.substr($mensaje, 0, 100).(strlen($mensaje) > 100 ? '...' : '').'</li>
            </ul>
          </div>
          <p>Mientras esperas nuestro contacto, te compartimos nuestros servicios:</p>
          <ul style="text-align: left; color: #475569;">
            <li>Limpieza corporativa de oficinas</li>
            <li>Limpieza pre y post eventos</li>
            <li>Mantenimiento general</li>
            <li>Gestion de residuos y reciclaje</li>
          </ul>
          <a href="https://cdlpartner.cl" class="cta">Visitar nuestro sitio web</a>
        </div>
        <div class="footer">
          <p>CDL Partner - Servicios de Limpieza Industrial y Corporativa</p>
          <p>daniela@cdlpartner.cl | +56 9 5005 4833</p>
          <p style="margin-top: 10px; font-size: 11px; color: #64748b;">Este es un mensaje automatico de confirmacion. Por favor no responder a este correo.</p>
        </div>
      </div>
    </body>
    </html>';

    $mail->send();

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['error' => 'Error al enviar: ' . $mail->ErrorInfo]);
}