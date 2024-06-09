### Scanning through user presentable data

When users submit errors in their reports, sometimes the error is located beside some data that changes on each reprint (such as a time stamp).

Where you have a replicable source of errors, a regular expression can be useful for jumping to the next error or helping confirm the solution to solve multiple errors.

### Duplicating code changes

Sometimes lots of method-calls need to be changed in a very large file or over a folder. Two major examples of this are;

1.  Adding logging to lots of variable assignments for the so development team can see which code is triggered
2.  Changing method-calls to use a newly created replacement that takes different arguments. I needed to do this as logic was moved further ahead in the pipleline

VScode features a preview of the replacement result so changes can all be looked at before they are executed.

### Find references without a language server protocol

I have worked with programming languages without an LSP, so finding all uses of a function or a string value that shares the same name
as a key word can be difficult.

One example is a keyword ```EQ``` being the same as a site name "EQ". I used regular expressions to find all instances of the string 
and not the keyword, I used the regular expression ```[",]EQ[",]``` as EQ can appear in a comma separated string "EQ,AR".

### Quickly add logging to a test program.

If a variable is getting an unexpected value, the easiest way to find out what is happening without debugging tools, is to 
log at every instance the variable is mutated and then work from there.
