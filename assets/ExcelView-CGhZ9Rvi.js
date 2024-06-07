import{d as o,m as a,c as s,a as e,n as i,u as n,F as r,o as c,e as d}from"./index-BSn_o1d5.js";const h=`### Linking Vendor data with ERP data

Two common scenarios have occured when vendors had changes we needed to address in our ERP system

1.  Vendors had a change in pricing, so the costs need to be updated
2.  Vendors had a product rationilisation, thereby removing many items from their catalogue

The data was presented to me in an excel spreadsheet, I would then use xlookups on upcs numbers or item vendor codes to get the ERP item numbers. After I found the information I was looking for I would then create a new upload sheet to implement the changes

### Presenting Large (proposed) changes to ERP Experts

Sometimes the easiest way to explain changes or confirm your understanding is to present the changes, I often used excel for just doing that as most non-technical users can intuitively understand excel

### Conditional Formatting

Automatically highlighting changes of interest can help users know where to look and see results of the changes. I have setup conditional formatting so it can achieve outcomes such as identify duplicate data 
(sometimes multiple column combinations need to be unique), Highlight dates as they come up and due dates
`,l=["innerHTML"],f=o({__name:"ExcelView",setup(m){const t=a(h).mkd;return(u,p)=>(c(),s(r,null,[e("h2",{style:i(n(d)("h2"))},"My Excel experience",4),e("article",{id:"contents",innerHTML:n(t)},null,8,l)],64))}});export{f as default};
