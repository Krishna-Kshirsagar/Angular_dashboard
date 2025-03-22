Angular Dashboard with ngx-charts
This is an Angular dashboard application that allows you to display dynamic data using various chart types such as Bar, Line, and Pie charts. The charts are built using the ngx-charts library.

Features
Display dynamic data in the form of Bar, Line, and Pie charts.

Use Angular Material components for the UI.

Fetch data from a mock JSON file.

Responsive charts that automatically update based on the selected chart type.

Requirements
Before you begin, ensure you have met the following requirements:

Node.js installed on your machine.

Angular CLI installed globally.

Installation
Clone the repository to your local machine:

bash
Copy
git clone <https://github.com/Krishna-Kshirsagar/Angular_dashboard.git>
cd <dashboard>
Install dependencies:

bash
Copy
npm install
Serve the application:

Run the application locally using Angular CLI:

bash
Copy
ng serve
Your application should now be available at http://localhost:4200/.

File Structure
src/
│
├── app/
│ ├── components/
│ │ ├── bar-chart/
│ │ ├── line-chart/
│ │ └── pie-chart/
│ ├── service/
│ │ └── data.service.ts
│ ├── app.component.ts
│ ├── app.component.html
│ ├── app.component.scss
│ ├── app.module.ts
│ └── app-routing.module.ts
└── assets/
└── data/
└── metrics.json
Main Files to Note
app.component.ts: The main component that controls the state of the dashboard and handles data fetching and chart type selection.

app.component.html: Contains the UI layout with Material Design elements like the toolbar, form field, and select dropdown for choosing chart types.

bar-chart.component.ts, line-chart.component.ts, pie-chart.component.ts: Components that render Bar, Line, and Pie charts respectively.

data.service.ts: A service for fetching data from a mock JSON file (assets/data/metrics.json).

Usage
Select Chart Type:

The user can choose between three chart types: Bar, Line, and Pie charts.

The chart type can be selected using the mat-select dropdown in the UI.

Chart Display:

The appropriate chart (Bar, Line, or Pie) will be displayed based on the selected chart type.

Dynamic Data:

Data is fetched from a mock JSON file located at assets/data/metrics.json.

Each chart is populated dynamically with data from this file.

Example JSON Data (metrics.json)
json
Copy
{
"sales": [
{ "name": "Jan", "value": 400 },
{ "name": "Feb", "value": 450 },
{ "name": "Mar", "value": 300 }
],
"performance": [
{ "name": "Q1", "value": 30 },
{ "name": "Q2", "value": 70 },
{ "name": "Q3", "value": 50 }
]
}
Chart Components
BarChartComponent: Displays the data in a bar chart format using ngx-charts-bar-vertical.

LineChartComponent: Displays the data in a line chart format using ngx-charts-line-chart.

PieChartComponent: Displays the data in a pie chart format using ngx-charts-pie-chart.

Chart Customization
You can customize the chart appearance by editing the following properties in each chart component:

view: The size of the chart (e.g., [700, 400]).

colorScheme: Defines the color scheme for the chart.

results: The actual data to be displayed in the chart. It is passed as an input from the parent component.

Dependencies
This project uses the following key dependencies:

Angular: Framework for building the application.

ngx-charts: A charting library based on Angular.

Angular Material: For UI components like toolbar, form field, and select dropdown.

HttpClientModule: For HTTP requests to fetch data from the mock JSON file.
