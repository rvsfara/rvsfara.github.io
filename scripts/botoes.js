<script type="text/javascript">
	$(function(){
        $("#chkContato").click(function () {
            if ($(this).is(":checked")) {
                $("#dvInformacaoPessoal").show();
                $("#AddPassport").hide();
            } else {
                $("#dvInformacaoPessoal").hide();
                $("#AddPassport").show();
            }
        });
		$("#chkFormacao").click(function () {
            if ($(this).is(":checked")) {
                $("#dvFormacao").show();
                $("#AddPassport").hide();
            } else {
                $("#dvFormacao").hide();
                $("#AddPassport").show();
            }
        });
    });
</script>