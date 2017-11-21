$(document).ready ( function () {
    $("#table_vote").on ("click", "tr", function () {
         $(this).addClass('table-active').siblings().removeClass('table-active');
    });
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var options={
      format: 'dd/mm/yyyy',
      language: 'fr',
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
    var v_date;
    var v_prenom;
    var v_nom;
    var v_mail;
    var v_vote;
    document.getElementById("btn_valider").addEventListener('click',function ajout_vote (){
      v_date=document.forms.form_ajout_vote.date.value;
      v_prenom=document.forms.form_ajout_vote.prenom.value;
      v_nom=document.forms.form_ajout_vote.nom.value;
      v_mail=document.forms.form_ajout_vote.mail.value;
      v_vote=document.forms.form_ajout_vote.vote.value;

      var tr = document.createElement("TR");

      var td = document.createElement("TD");
      var t = document.createTextNode(v_date);
      td.appendChild(t);
      tr.appendChild(td);

      var td1 = document.createElement("TD");
      var t1 =document.createTextNode(v_prenom);
      td1.appendChild(t1);
      tr.appendChild(td1);

      var td2 = document.createElement("TD");
      var t2=document.createTextNode(v_nom);
      td2.appendChild(t2);
      tr.appendChild(td2);

      var td3 = document.createElement("TD");
      var t3=document.createTextNode(v_mail);
      td3.appendChild(t3);
      tr.appendChild(td3);

      var td4 = document.createElement("TD");
      var t4=document.createTextNode(v_vote);
      td4.appendChild(t4);
      tr.appendChild(td4);

      document.getElementById("tab_body").appendChild(tr);           // Append <p> to <div> with id="myDIV"
    });

});
