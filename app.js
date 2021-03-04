// Use D3 fetch to read samples JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("../samples.json").then((importedData) => {
    var data = importedData;
    var demographicData = Object.values(data.metadata);
    var samples = Object.values(data.samples);
    var otu_ids = Object.values(data.samples[0].otu_ids.slice(0, 10).reverse()); //getting top 10 OTU IDs; reversing array to display results largest to smallest in bar graph
    var sample_values = Object.values(data.samples[0].sample_values.slice(0, 10).reverse()); //getting top 10 Sample Result values; reversing array to display results largest to smallest in bar graph
    var otu_labels = Object.values(samples[0].otu_labels.slice(0, 10).reverse()); //getting top 10 OTU label values; reversing array to display results largest to smallest in bar graph

    console.log(otu_labels);

   // Trace data for Plotly graph
   var trace1 = { 
     x: sample_values,
     y: otu_ids.map(id => `OTU ${id}`), //prepend each element of the array with "OTU"
     text: otu_labels,
     name: "OTUs",
     type: "bar",
     orientation: "h"
   };
 
   // data
   var chartData = [trace1];
 
   // Apply the group bar mode to the layout
   var layout = {
     title: "Top 10 OTUs",
     margin: {
       l: 100,
       r: 100,
       t: 100,
       b: 100
     }
   };
 
   // Render the plot to the div tag with id "bar"
   Plotly.newPlot("bar", chartData, layout);
 });