document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "PN";
/* 
document.firstElementChild.lastElementChild -> <body>
                                                    <h1>Hello</h1>
                                                    <input type="checkbox">
                                                    <button style=":active color:red;">Click Me</button>
                                                    <ul>
                                                    <li class="list">
                                                        <a href="https://www.google.com">Google</a>
                                                    </li>
                                                    <li class="list">Second</li>
                                                    <li class="list" style="color: red;">PN</li>
                                                    </ul>
                                                    <script src="./index.js"></script>                                                
<div id="extwaiokist" style="display:none" v="nipgg" q="e020c4b6" c="858.0" i="51" u="4.663" s="06112421" sg="svr_09102316-ga_06112421-bai_06222414" d="1" w="false" e="" a="3" m="BMe=" vn="9adfy"><div id="extwaigglbit" style="display:none" v="nipgg" q="e020c4b6" c="858.0" i="51" u="4.663" s="06112421" sg="svr_09102316-ga_06112421-bai_06222414" d="1" w="false" e="" a="3" m="BMe="></div></div></body> 
*/

document.getElementsByTagName('li') 
/* output ->
HTMLCollection(3) [li.list, li.list, li.list]
0
: 
li.list
1
: 
li.list
2
: 
li.list
length
: 
3
[[Prototype]]
: 
HTMLCollection
 */

document.getElementsByTagName("li")[2].style.color = 'red';

document.getElementsByClassName("btn")[0].style.color = 'red';

document.getElementById("title").innerHTML = 'Good Bye';

document.querySelector('h1');

document.querySelector('.btn');

document.querySelector('#title');

document.querySelector('li a').style.color = 'purple';

document.querySelectorAll('ul .list')
/* Output ->
NodeList(3) [li.list, li.list, li.list] */
