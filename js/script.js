$(document).ready ( function () {

    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var options={
      format: 'dd/mm/yyyy',
      language: 'fr',
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);

    $('#btn_suppr').prop('disabled', true);
    $('#btn_modif').prop('disabled', true);
    tooltips(true);



    function tooltips(b) {
      if(b){
        $('[data-toggle="tooltip"]').tooltip('enable');
      }else{
        $('[data-toggle="tooltip"]').tooltip('disable');
      }
    }


    $(document).click(function(event) {
        if(!$(event.target).closest('#table_vote').length && !$(event.target).closest('#modal_suppr').length && !$(event.target).closest('#btn_suppr').length ) {
            $(".table-active").removeClass('table-active');
        }

        if($(".table-active")[0]===undefined){
          $('#btn_suppr').prop('disabled', true);
          $('#btn_modif').prop('disabled', true);
          tooltips(true);
        }else{
          tooltips(false);
          $('#btn_suppr').prop('disabled', false);
          $('#btn_modif').prop('disabled', false);
        }
    });



    $('#form_ajout_vote').submit(function(event){
        // cancels the form submission
        event.preventDefault();

        $('#form_ajout_vote :input:visible[required="required"]').each(function()
        {
            if(!this.validity.valid)
            {
                $(this).focus();
                // break
                return false;
            }else{
              $("#modal_ajout").modal('hide');
              ajout_vote();
              modify=false;
            }
        });
    });
    var v_date;
    var v_prenom;
    var v_nom;
    var v_mail;
    var v_vote;
    var modify=false;

    $("#table_vote tbody").on ("click", "tr", function () {
         $(this).addClass('table-active').siblings().removeClass('table-active');
         var tr= document.getElementsByClassName('table-active')[0].getElementsByTagName("TD");
         v_date=tr[0].textContent;
         v_prenom=tr[1].textContent;
         v_nom=tr[2].textContent;
         v_mail=tr[3].textContent;
         v_vote=tr[4].textContent;
    });



    document.getElementById("btn_ajout").addEventListener('click',function clean_form (){
      document.forms.form_ajout_vote.date.value=null;
      document.forms.form_ajout_vote.prenom.value=null;
      document.forms.form_ajout_vote.nom.value=null;
      document.forms.form_ajout_vote.mail.value=null;
      document.forms.form_ajout_vote.vote.value=document.forms.form_ajout_vote.vote.getElementsByTagName("option")[0].value;
    });

    document.getElementById("btn_modif").addEventListener('click',function fill_form (){
      document.forms.form_ajout_vote.date.value=v_date;
      document.forms.form_ajout_vote.prenom.value=v_prenom;
      document.forms.form_ajout_vote.nom.value=v_nom;
      document.forms.form_ajout_vote.mail.value=v_mail;
      document.forms.form_ajout_vote.vote.value=v_vote;
      modify=true;
    });

    document.getElementById("btn_conf_suppr").addEventListener('click',delete_vote);

    function ajout_vote (){
        if(modify){
          delete_vote();
        }
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

        document.getElementById("tab_body").appendChild(tr);
      }

      function delete_vote(){
        var selection = document.getElementsByClassName('table-active')[0];

        if(selection!==undefined){
          var parent = selection.parentElement;
          parent.removeChild(selection);
        }
        $(".table-active").removeClass('table-active');
      }



});
