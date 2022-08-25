
let column__report = document.querySelector('.column__report');
let column__share = document.querySelector('.column__share');
let column__delate = document.querySelector('.column__delate');
let column__edit = document.querySelector('.column__edit');
let report_items = document.querySelector('.ads_report_items');
let delate_items = document.querySelector('.ads_delate_items');
let edit_items = document.querySelector('.ads_edit_items');
let estate__share = document.querySelector('.estate__share');





column__report.onclick = function(){
    report_items.classList.toggle('open');
}

column__delate.onclick = function(){
    delate_items.classList.toggle('open');
}

column__edit.onclick = function(){
    edit_items.classList.toggle('open');
}

column__share.onclick = function(){
    estate__share.classList.toggle('open');
}