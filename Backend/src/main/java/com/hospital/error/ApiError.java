package com.hospital.error;

import java.time.LocalDateTime;

public class ApiError {

    private LocalDateTime timestamp;
    private int statusCode;
    private String status;
    private String message;
    private String path;

    public ApiError(int statusCode, String status, String message, String path) {
        this.timestamp = LocalDateTime.now();
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.path = path;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public String getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public String getPath() {
        return path;
    }
}