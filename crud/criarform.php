<?php include "cabecalho.php"; ?>

<form action="criar.php" method="POST" class="form-group">
    <label for="Nome" class="lbl">Nome</label>
    <input type="text" class="form-control" id="nome" name="nome" maxlength="30">
    <label for="Endereçõ" class="lbl">Endereço</label>
    <input type="text" class="form-control" name="end" od="end" maxlength="30">
    <label for="Rg" class="lbl">RG</label>
    <input type="text" class="form-control" name="rg" id="rg" maxlength="7">
    <button class="btn btn-outline-primary" type="submit" id="enviarbtn">Enviar</button>
</form>
