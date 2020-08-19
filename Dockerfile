FROM golang:1.14

LABEL maintainer="Ahmad <a.berahman.dev@gmail.com>"

WORKDIR /app

COPY go.mod .

COPY go.sum .

RUN go mod download

COPY . .

ENV PORT 8000

RUN go build

CMD ["./batamrin"]