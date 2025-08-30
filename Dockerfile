FROM node:16

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json để cài đặt các thư viện
COPY package*.json ./
# Cài đặt các thư viện của ứng dụng bằng npm ci để đảm bảo cài đặt sạch
RUN npm ci

# Sao chép mã nguồn ứng dụng còn lại vào container
COPY . .

# Mở cổng 5000 cho ứng dụng
EXPOSE 5000

# Lệnh để chạy ứng dụng bằng Node.js
CMD [ "node", "server.js" ]