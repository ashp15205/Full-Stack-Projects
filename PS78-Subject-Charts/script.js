const data = { subjects:["Math","Science","English","History","CS"], marks:[85,92,78,88,95], attendance:[90,10], progress:[70,75,82,85,92] };
const opts = { plugins:{legend:{labels:{color:"#fff"}}}, scales:{x:{ticks:{color:"#aab4fc"}}, y:{ticks:{color:"#aab4fc"},beginAtZero:true}}};

new Chart(document.getElementById("bar"), { type:"bar", data:{ labels:data.subjects, datasets:[{label:"Marks",data:data.marks,backgroundColor:["#6c63ff","#f72585","#00d2ff","#ff9800","#4caf50"]}]}, options: opts });
new Chart(document.getElementById("line"), { type:"line", data:{ labels:["Jan","Feb","Mar","Apr","May"], datasets:[{label:"Progress",data:data.progress,borderColor:"#6c63ff",backgroundColor:"rgba(108,99,255,0.1)",tension:0.4,fill:true}]}, options: opts });
new Chart(document.getElementById("dough"), { type:"doughnut", data:{ labels:["Present","Absent"], datasets:[{data:data.attendance,backgroundColor:["#4caf50","#f72585"]}]}, options:{plugins:{legend:{labels:{color:"#fff"}}}}});
