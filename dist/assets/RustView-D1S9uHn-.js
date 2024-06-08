import{d as a,m as o,c as r,a as e,n as s,u as n,F as i,o as l,e as d}from"./index-DGeo-NSi.js";const h=`### Formatter for the Abl Progress language

Currently the ABL Progress language does not have a formatter. I noticed that most of our large programs had inconsistent indenting,
,which made tracking branching code and procedures(functions) difficult. 
After spending considerable time reformatting the code by hand to improve maintainability, 
I looked at general purpose code formatters. None of them worked with ABL Progress.

After coming across the Rust parsing framework [Pest](https://pest.rs/), I started implementing an MVP version of the formatter.
Unfortunately the grammar of the progress language is not open source.
I managed to recreate an approximate subset of the language that we tend to use.

This program, in combination with merging, helped improve the readability of programs that had for years been misaligned 
and causing confusion thereby slowing down our changes.

### Ecology

As part of learning the Rust programming language I attempted this challange [On reddit](https://www.reddit.com/r/dailyprogrammer/comments/27h53e/662014_challenge_165_hard_simulated_ecology_the/)


The task is to make a forest on a 2D array(chessboard like grid) and simulate the forest for 400 years. 
The short summary is.

Each square can contain

*   Trees, which will be at one of these life stages, sapling, tree or elder
*   LumberJack which will cut down mature and elder trees
*   Bears which will take out lumberJacks

Each entity present has its own moving, spawning and despawning rules, with monthly changes and a yearly census.

In addition to this I refactored the program so it can be optionally run _muli-Threaded_

### Various command line tools

I was often supplied with data in a format the user could print,edit and then needed to upload in a different format.

The user often edited a file that was easy to read but more challenging to parse. I made command line tools to quickly run in vscode to convert the file in a way that could be uploaded.
`,m=["innerHTML"],f=a({__name:"RustView",setup(c){const t=o(h).mkd;return(u,g)=>(l(),r(i,null,[e("h2",{style:s(n(d)("h2"))},"A selected list of Rust projects I have completed",4),e("article",{id:"contents",innerHTML:n(t)},null,8,m)],64))}});export{f as default};
