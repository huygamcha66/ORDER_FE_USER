TẢI CertBot CHO SERVER
https://sourceforge.net/projects/certbot.mirror/
làm the hướng dẫn:
https://www.youtube.com/watch?v=6JXT_Cv5KH4&ab_channel=i12bretro
(chạy windows powersheel với admin)
certbot certonly --webroot -w C:\nginx-1.26.0\html -d tatcadichvu.com -d www.tatcadichvu.com

thêm thư mục vào trong nginx mkdir C:\nginx-1.26.0\html\.well-known\acme-challenge
vào trong thư mục nginx/conf thêm vào
listen 443 ssl;
ssl_certificate C:/nginx-1.26.0/certificates/fullchain.pem;
ssl_certificate_key C:/nginx-1.26.0/certificates/privkey.pem;

sửa đường dẫn tới file trong phần live của file certbot
ssl_certificate C:/Certbot/live/tatcadichvu.com/fullchain.pem;
ssl_certificate_key C:/Certbot/live/tatcadichvu.com/privkey.pem;

chạy lại nginx -t, nginx -s reload
