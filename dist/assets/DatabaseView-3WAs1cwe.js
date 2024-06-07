import{d as o,c as i,a as e,n as t,u as s,b as n,F as l,o as r,e as a}from"./index-Ch_lR3vu.js";const u=e("br",null,null,-1),m=e("br",null,null,-1),E=e("pre",null,`      /* ABL Progress code */
      DEFINE TEMP-TABLE ttOutput
      	DEFINE FIELD code LIKE warehouse.code
      	DEFINE FIELD item-no LIKE item.item-no
      	DEFINE FIELD item.name LIKE item.name
      	DEFINE FIELD num-in-stock LIKE item.num-in-stock
      .

      /* Print headers I did write a function to generate based on temp-table */
      EXPORT DELIMITER "Warehouse-code" "item-no" "item-name" "number in stock"
      FOR EACH warehouse WHERE can-do("LM,LX",warehouse.code) NO-LOCK:
      	FOR EACH item where item.warehouse-code EQ warehouse.code NO-LOCK:
      		CREATE ttOutput.
      		BUFFER-COPY warehouse ttOutput.
      		BUFFER-COPY item ttOutput.
      		EXPORT DELIMITER "," ttOutPut
      	END.
      END.
    `,-1),h=e("pre",null,`      -- Equivalent SQL CODE
      SELECT warehouse.code item.item-no item.name item.num-in-stock
      FROM warehouse
      INNER JOIN item ON wareshouse.code = item.warehouse-code
    `,-1),y=o({__name:"DatabaseView",setup(d){return(c,p)=>(r(),i(l,null,[e("h2",{style:t(s(a)("h2"))},"My database experience",4),e("article",null,[e("h3",{style:t(s(a)("h3"))},"Relational database",4),e("h4",{style:t(s(a)("h4"))},"ABL Progress",4),e("p",{style:t(s(a)("p"))},"Abl progress is a relational database management system",4),e("p",{style:t(s(a)("p"))},"I have used this progamming lanaguage for over 5 years",4),e("ul",null,[e("li",{style:t(s(a)("li"))},"Extracting data for stakeholders",4),e("li",{style:t(s(a)("li"))},"Creating new functionality ",4),e("li",{style:t(s(a)("li"))},"Fixing issues with the ERP system",4),e("li",{style:t(s(a)("li"))},"Improving validation logic",4),e("li",{style:t(s(a)("li"))},"Removing data",4)]),e("h4",{style:t(s(a)("h4"))},"How ABL progress maps to SQL",4),e("p",{style:t(s(a)("p"))},[n(" ABL progress and SQL are both relational programming languages."),u,n(" ABL tends to be more imperative and less concise then SQL."),m,n(" ABL progress tends to handle application data as well. ")],4),e("h5",{style:t(s(a)("h5"))},"ABL progress",4),E,e("h5",{style:t(s(a)("h5"))},"SQL",4),h]),e("article",null,[e("h3",{style:t(s(a)("h3"))},"SQL ",4),e("p",{style:t(s(a)("p"))},"I have used mySQL at university for my various assigments and had it interop with websites. I have also used T-SQL as part of my database courses ",4)])],64))}});export{y as default};
