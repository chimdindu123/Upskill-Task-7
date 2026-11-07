# Mortgage Repayment Calculator

A responsive mortgage calculator built with HTML, CSS and JavaScript. It lets a user estimate monthly mortgage payments and the total amount paid over the selected term.

## Features

- Enter a mortgage amount, mortgage term and interest rate.
- Choose between **Repayment** and **Interest Only**.
- Calculates and displays the estimated monthly payment and total repayment.
- Checks the form and displays an error when an input is missing or invalid.
- Clear All resets the form, errors and results.
- Responsive layout for mobile and desktop screens.
- Uses GBP (£) currency formatting.

## Built With

- **HTML** – page structure and form elements.
- **CSS** – layout, colours, typography, responsive design and hover/focus states.
- **JavaScript** – form validation, calculations and updating the results.

## Design Style

The design follows the supplied Frontend Mentor style guide:

- **Primary lime:** `hsl(61, 70%, 52%)`
- **Error red:** `hsl(4, 69%, 50%)`
- **White:** `hsl(0, 0%, 100%)`
- **Slate 100:** `hsl(202, 86%, 94%)`
- **Slate 300:** `hsl(203, 41%, 72%)`
- **Slate 500:** `hsl(200, 26%, 54%)`
- **Slate 700:** `hsl(200, 24%, 40%)`
- **Slate 900:** `hsl(202, 55%, 16%)`

The page uses Plus Jakarta Sans, with a 16px base paragraph size where appropriate. The layout is designed to adapt to different screen sizes, including small mobile screens.

## How the Calculation Works

### Repayment mortgage

The monthly payment is calculated using the standard repayment mortgage formula:

`M = P × r / (1 − (1 + r)^−n)`

Where:
- `M` is the monthly payment.
- `P` is the mortgage amount.
- `r` is the monthly interest rate (annual rate divided by 12 and by 100).
- `n` is the total number of monthly payments (years multiplied by 12).

If the interest rate is 0%, the calculator divides the mortgage amount equally across all monthly payments.

### Interest-only mortgage

The monthly payment is the mortgage amount multiplied by the monthly interest rate. The total shown includes all interest payments over the term plus the original mortgage amount.

> The calculator provides an estimate only. It does not include lender fees, taxes, insurance or other additional costs.

## How to Use

1. Open `index.html` in a web browser.
2. Enter the mortgage amount.
3. Enter the mortgage term in whole years.
4. Enter the annual interest rate.
5. Select Repayment or Interest Only.
6. Click **Calculate Repayments** to view the results.
7. Click **Clear All** to start again.

## Project Files

- `index.html` – the structure and content of the calculator.
- `style.css` – all page styling and responsive rules.
- `script.js` – validation, mortgage calculations and result display.
- `README.md` – project information and usage instructions.

## Author

**Chimdindu Akpom**
