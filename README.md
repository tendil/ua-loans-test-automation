# Test Automation Framework for PI Lending

## Installation

### Steps to install project:

1. Cloning the repository

```shell
git clone https://code.rbi.tech/IUADE0UC/ua-loans-pi-lending-test-automation.git
```

2. Move to directory

```shell
cd ua-loans-pi-lending-test-automation
```

3. Installing required dependencies

```shell
npm install
```

# Command Line

## Running all tests

```shell
codeceptjs run --steps
```

## Running a single test file

```shell
codeceptjs run --steps ./src/**/loan.pay.feature
```

## Run the test with the title

```shell
codeceptjs run --steps -g make loan pay
```

