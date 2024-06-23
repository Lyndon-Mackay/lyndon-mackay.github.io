import{d as a,m as o,c as r,a as e,n as s,u as t,F as i,o as d,e as l}from"./index-DghDr53i.js";const h=`
### Formatter for the ABL Progress language
Currently the ABL Progress language does not have a formatter. I noticed
that most of our large programs had inconsistent indenting, which made
tracking of branching code and procedures(functions) difficult.
After spending considerable time reformatting the code by hand to improve
maintainability, I looked at general purpose code formatters. None of
them worked with ABL Progress.
After coming across the Rust parsing framework [Pest](https://pest.rs/),
I started implementing an MVP version of the formatter.
Unfortunately the grammar of the progress language is not open source.
I managed to recreate an approximate subset of the language that we tend
to use.
This program, in combination with merging, helped improve the readability
of programs that had for years been misaligned and causing confusion
thereby slowing down our changes.

### Ecology
As part of learning the Rust programming language I attempted this challenge [On
reddit](https://www.reddit.com/r/dailyprogrammer/comments/27h53e/662014_challenge_165_hard_simulated_ecology_the/)
The task is to make a forest on a 2D array (chessboard
like grid) and simulate the forest for 400 years.
The short summary is each square can contain:
* Trees, which will be at one of these life stages, sapling, tree or
elder
* LumberJack which will cut down mature and elder trees
* Bears which will take out lumberJacks
Each entity present has its own moving, spawning and despawning rules,
with monthly changes and a yearly census.
In addition to this I refactored the program so it can be optionally run
_multi-Threaded_

### Various command line tools
I was often supplied with data in a format the user could
print and edit, and then needed to upload in a different format.
The user often edited a file that was easy to read but more challenging
to parse. I made command line tools to quickly run in vscode to convert
the file in a way that could be uploaded.

### Helix text editor 

#### Split Views with Synced Scrolling

A non trivial feature request was the ability to split a text editor view
vertically such that text on the right view was a page down on the left view.
This required me to learn a new codebase in a new domain then figure out how 
to add the feature. This I did successfully, however the sizes of the changes
required prevented it from being added as it was deemed to be outside the scope
of the base text editor
`,c=["innerHTML"],p=a({__name:"RustView",setup(m){const n=o(h).mkd;return(u,g)=>(d(),r(i,null,[e("h2",{style:s(t(l)("h2"))},"A selected list of Rust projects I have completed",4),e("article",{id:"contents",innerHTML:t(n)},null,8,c)],64))}});export{p as default};
