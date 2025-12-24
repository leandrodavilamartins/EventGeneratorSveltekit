<script>
    let msg = `
    <eSocial>
    </eSocial>
    `

    let cpfTrab = ''; 
    let nmTrab = ''; 
    let sexo = ''; 
    let racaCor = ''; 
    let estCiv = ''; 
    let grauInstr = ''; 
    let nmSoc = ''; 

    let grupo = {
        'trabalhador': `
        <trabalhador>
            <cpfTrab></cpfTrab>
            <nmTrab></nmTrab>
            <sexo></sexo>
            <racaCor></racaCor>
            <estCiv></estCiv>
            <grauInstr></grauInstr>
            <nmSoc></nmSoc>
        </trabalhador>
        `
    }
</script>

<div class="container">
    <input class="input" placeholder="CPF"/>
    <input class="input" placeholder="Nome do Trabalhador"/>
    <select class="select">
        <option value="M">M</option>
        <option value="F">F</option>
    </select>
    <button class="btn">Gerar XML</button>
</div>

<style>
    .container{
        display: flex;
        margin: auto;
        width: 50%;
        flex-direction: column;
    }
</style>