import{d as t,m as o,c as r,a as e,n as s,u as n,F as i,o as d,e as l}from"./index-D3YQzFtE.js";const m=`### Formatter for the Abl Progress language

Currently the ABL Progress langauge does not have a formatter. I noticed that most of our large programs had incosistent indenting
,which made tracking branching code and procedures(functions) difficult. 
After spending considerable reformatting the code by hand to improve maintanability, 
I looked at general purpose code formatters however none of them worked with able progress

After coming across the Rust parsing framework [Pest](https://pest.rs/), I started implementing an MVP version of the formatter.
 Unfortanately the grammar of the progress language is not open source, 
I managed to recreate an approximate subset of the language we tend to use.

This program in combination with merging helped improve the readability of programs that had for years been misaligned 
and caused confusion slowing down our changes

### Ecology

As part of my learning of the rust programming language I attempted this programming challange [On reddit](https://www.reddit.com/r/dailyprogrammer/comments/27h53e/662014_challenge_165_hard_simulated_ecology_the/)


The short summary is make a forest that on a 2d array(chessboard like grid) and simulate the forest for 400 years. 
The short summary is.

Each square can contain

*   Trees, which will be at one of these life stages, sapling, Tree or Elder
*   LumberJack which will cut down mature and elder trees
*   Bears which will take out lumberJacks

Each entity present has its own moving, spawning and despawning rules, with monthly changes and a yearly census

In additon to this I refactored the program so it can be optionally run _muliThreaded_

### Various command line tools

I was often supplied with data in a consistent format the user could print and edit and needed to upload in a different format, 
the user often edited a file that was easy to read but more challanging to parse. I made command line tools to quickly run in vscode to convert the file in a way that could be uploaded
`,h=["innerHTML"],f=t({__name:"RustView",setup(c){const a=o(m).mkd;return(g,u)=>(d(),r(i,null,[e("h2",{style:s(n(l)("h2"))},"A selected list of Rust project I have done",4),e("article",{id:"contents",innerHTML:n(a)},null,8,h)],64))}});export{f as default};
