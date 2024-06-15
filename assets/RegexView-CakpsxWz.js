import{d as s,m as t,c as o,a as e,n as r,u as n,F as i,o as l,e as c}from"./index-DxabbcAy.js";const d=`### Scanning through user presentable data

When users submit errors in their reports, sometimes the error is located beside some data that changes on each reprint (such as a time stamp).

Where you have a replicable source of errors, a regular expression can be useful for jumping to the next error or helping confirm the solution to solve multiple errors.

### Duplicating code changes

Sometimes lots of method-calls need to be changed in a very large file or over a folder. Two major examples of this are;

1.  Adding logging to lots of variable assignments so development team can see which code is triggered
2.  Changing method-calls to use a newly created replacement that takes different arguments. I needed to do this as logic was moved further ahead in the pipeline

VScode features a preview of the replacement result so changes can all be looked at before they are executed.

### Find references without a language server protocol

I have worked with programming languages without an LSP, so finding all uses of a function or a string value that shares the same name
as a key word can be difficult.

One example is a keyword \`\`\`EQ\`\`\` being the same as a site name "EQ". I used regular expressions to find all instances of the string 
and not the keyword, I used the regular expression \`\`\`[",]EQ[",]\`\`\` as EQ can appear in a comma separated string "EQ,AR".

### Quickly add logging to a test program

When a variable is being assigned an unexpected value, leading to issues, different tools can help.
In small blocks of code in one or two files, debugging tools will likely be the best way to find out the cause.

However, this is not the case when the file is very large and the variable is assigned in multiple places and/or if debugging tools are not available.

In this instance, by using regular expressions, I can quicky add logging information with a unique identifier to see all the cases where the variable changes.
`,h=["innerHTML"],f=s({__name:"RegexView",setup(g){const a=t(d).mkd;return(u,m)=>(l(),o(i,null,[e("h2",{style:r(n(c)("h2"))},"Regular Expressions",4),e("article",{id:"contents",innerHTML:n(a)},null,8,h)],64))}});export{f as default};
