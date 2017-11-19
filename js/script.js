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
});

/*

function validite(champ)
{
    if(champ.value.length < 2 || champ.value.length > 25)

   {
    <script src="ajout-vote.js">
    <!--
    alert('Vous n''avez pas saisie de pseudo')
    //-->
    </script>
      return false;

   }
   else
   {
      return true;
   }
}

*/
