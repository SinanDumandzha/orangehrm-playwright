# Playwright Test Automation Framework – Training Project

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge)
![cross-env](https://img.shields.io/badge/cross--env-000000?style=for-the-badge)
![crypto-js](https://img.shields.io/badge/crypto--js-323330?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![ngrok](https://img.shields.io/badge/ngrok-1F1E37?style=for-the-badge&logo=ngrok&logoColor=white)

---

## 📌 Project Overview

This repository contains a **Playwright test automation framework** built for learning and training purposes.

The framework covers:

- ✅ UI Automation (OrangeHRM Demo Site)
- ✅ API Automation (Restful Booker)
- ✅ CI/CD Integration using:
  - GitHub Actions
  - Jenkins
- ✅ Secure environment configuration
- ✅ Cross-platform execution support

The goal of this project is to practice real-world automation framework design, API testing, and CI/CD pipeline implementation using industry best practices.

---

## 🌐 Applications Under Test

### 1️⃣ UI Testing – OrangeHRM Demo

Application:  
https://opensource-demo.orangehrmlive.com/

---

### 2️⃣ API Testing – Restful Booker

Application:  
https://restful-booker.herokuapp.com/

---

## 🧰 Tech Stack

| Tool           | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| Playwright     | UI & API Automation                                       |
| TypeScript     | Strong typed programming language                         |
| Node.js        | Runtime environment                                       |
| dotenv         | Environment variable management                           |
| cross-env      | Cross-platform environment variables                      |
| crypto-js      | Data encryption/decryption                                |
| ngrok          | Expose local server to internet (Jenkins webhook testing) |
| GitHub Actions | CI/CD                                                     |
| Jenkins        | CI/CD                                                     |

---

## 🏗 Framework Design Principles

- Page Object Model (POM)
- Reusable utilities
- Environment-based configuration
- Secure secret handling (Jenkins Credentials / GitHub Secrets)
- CI/CD ready architecture
- Cross-browser execution
- Parallel test execution
- Encrypted test data handling (crypto-js)
