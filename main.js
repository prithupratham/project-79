name_of_family_member=[];
function submit(){
    var name_1=document.getElementById("name_family_member1").value;
    var name_2=document.getElementById("name_family_member2").value;
    var name_3=document.getElementById("name_family_member3").value;
    var name_4=document.getElementById("name_family_member4").value;
    var name_3=document.getElementById("name_family_member5").value;
    var name_4=document.getElementById("name_family_member6").value;
    name_of_family_member.push(name_1);
    name_of_family_member.push(name_2);
    name_of_family_member.push(name_3);
    name_of_family_member.push(name_4);
    name_of_family_member.push(name_5);
    name_of_family_member .push(name_6);
   
console.log(name_of_family_member);
document.getElementById("display_name").innerHTML=name_of_family_member;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_family_member.sort();
    console.log(name_of_family_member);
    document.getElementById("display_name").innerHTML=name_of_family_member;
}
