<script>

    let cpfTrab = $state(''); 
    let nmTrab = $state(''); 
    let sexo = $state(''); 
    let racaCor = ''; 
    let estCiv = ''; 
    let grauInstr = ''; 
    let nmSoc = ''; 

    let grupo = $derived({
        'trabalhador': `
        <trabalhador>
            <cpfTrab>${cpfTrab}</cpfTrab>
            <nmTrab>${nmTrab}</nmTrab>
            <sexo>${sexo}</sexo>
            <racaCor>${racaCor}</racaCor>
            <estCiv>${estCiv}</estCiv>
            <grauInstr>${grauInstr}</grauInstr>
            <nmSoc></nmSoc>
        </trabalhador>
        `
    })

    let msg = $derived(`
    <eSocial>
        ${grupo.trabalhador}
    </eSocial>
    `)

    function gerarXML(){
        console.log(msg); 
    }
</script>

<div class="container">
    <input class="input" placeholder="CPF" bind:value={cpfTrab}/>
    <input class="input" placeholder="Nome do Trabalhador" bind:value={nmTrab}/>
    <select class="select" bind:value={sexo}>
        <option value="M">M</option>
        <option value="F">F</option>
    </select>
    <button class="btn" onclick={gerarXML}>Gerar XML</button>
</div>

<style>
    .container{
        display: flex;
        margin: auto;
        width: 50%;
        flex-direction: column;
    }
</style>