<script>
    import {db} from '$lib/firebaseApp'
    import {collection, addDoc, setDoc, doc} from 'firebase/firestore'; 
    import { fade, fly } from 'svelte/transition'; 

    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    let dependentes = $state(''); 
    let cpfTrab = $state(''); 
    let nmTrab = $state(''); 
    let sexo = $state(''); 
    let racaCor = $state(''); 
    let estCiv = $state(''); 
    let grauInstr = $state(''); 
    let dtNascto = $state(''); 
    let paisNascto = $state(''); 
    let paisNac = $state(''); 
    let tpLograd = $state(''); 
    let dscLograd = $state(''); 
    let nrLograd = $state(''); 
    let complemento = $state(''); 
    let bairro = $state(''); 
    let cep = $state(''); 
    let codMunic = $state(''); 
    let uf = $state(''); 
    let defFisica = $state(''); 
    let defVisual = $state(''); 
    let defAuditiva = $state(''); 
    let defMental = $state(''); 
    let defIntelectual = $state(''); 
    let reabReadap = $state(''); 
    let infoCota = $state(''); 
    let observacao = $state(''); 
    let fonePrinc = $state(''); 
    let emailPrinc = $state(''); 
    // control variables 
    let dependenteFormControl = $state(''); 
    
    let dependenteHTML = `
    <div class="w-full space-y-4 text-center">
        <p></p>
	    <hr class="hr" />
        <p></p>
    </div>
    <form class="mx-auto w-full max-w-md space-y-4">
        <fieldset>
            <label class="label">
                <span class="label-text">Tipo de Dependente</span>
                <select class="select">
                    <option value="01">Cônjuge</option>
                    <option value="02">Companheiro(a) com o(a) qual tenha filho ou viva há mais de 5 (cinco) anos ou possua declaração de união estável</option>
                    <option value="03">Filho(a) ou enteado(a)</option>
                    <option value="04">Filho(a) ou enteado(a), universitário(a) ou cursando escola técnica de 2º grau</option>
                    <option value="06">Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, do(a) qual detenha a guarda judicial</option>
                    <option value="07">Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, universitário(a) ou cursando escola técnica de 2° grau, do(a) qual detenha a guarda judicial</option>
                    <option value="09">Pais, avós e bisavós</option>
                    <option value="10">Menor pobre do qual detenha a guarda judicial</option>
                    <option value="11">A pessoa absolutamente incapaz, da qual seja tutor ou curador</option>
                    <option value="12">Ex-cônjuge</option>
                    <option value="99">Agregado/Outros</option>
                </select> 
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span class="label-text">Nome do Dependente</span>
                <input class="input" type="text" />
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span class="label-text">Data de Nascimento</span>
                <input class="input" type="date"/>
            </label>
        </fieldset>
                <fieldset>
            <label class="label">
                <span class="label-text">CPF</span>
                <input class="input" type="text" />
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span class="label-text">Sexo</span>
                <select class="select">
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span class="label-text">Dependente IRRF</span>
                <select class="select">
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span class="label-text">Dependente Salário-Família</span>
                <select class="select">
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span class="label-text">Incapacidade para o trabalho ? </span>
                <select class="select">
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span class="label-text">Descrição da Dependência </span>
                <input class="input" type="text" />
            </label>
        </fieldset>
        </form>`

    // formulário do dependente
    function dependenteForm(){
        let msg = `
            <dependente>
                <tpDep></tpDep>
                <nmDep></nmDep>
                <dtNascto></dtNascto>
                <cpfDep></cpfDep>
                <sexoDep></sexoDep>
                <depIRRF></depIRRF>
                <depSF></depSF>
                <incTrab></incTrab>
                <descrDep></descrDep>
            </dependente>`

            return msg; 
    }

    function adicionarDependente(){
        let divDependente = document.querySelector('#dependenteElement')
        console.log(divDependente); 
        divDependente.innerHTML = divDependente.innerHTML + dependenteHTML; 
        window.scrollTo({top:document.body.scrollHeight, left:0, behavior:'smooth'}); 
        return ; 
    }

    async function cadastrarTrab(){
        try {
            const docRef = await addDoc(collection(db, "cadastrados"), {
                cpfTrab: `${cpfTrab}`,
                nmTrab: `${nmTrab}`,
                sexo: `${sexo}`, 
                racaCor: `${racaCor}`, 
                estCiv: `${estCiv}`, 
                grauInstr: `${grauInstr}`,
                dtNascto: `${dtNascto}`, 
                paisNascto: `${paisNascto}`,
                paisNac: `${paisNac}`, 
                tpLograd: `${tpLograd}`, 
                dscLograd: `${dscLograd}`, 
                nrLograd: `${nrLograd}`,
                complemento: `${complemento}`,
                bairro: `${bairro}`,
                cep: `${cep}`,
                codMunic: `${codMunic}`,
                uf: `${uf}`,
                defFisica: `${defFisica}`,
                defVisual: `${defVisual}`,
                defAuditiva: `${defAuditiva}`,
                defMental: `${defMental}`,
                defIntelectual: `${defIntelectual}`,
                reabReadap: `${reabReadap}`,
                infoCota: `${infoCota}`,
                observacao: `${observacao}`,
                fonePrinc: `${fonePrinc}`,
                emailPrinc: `${emailPrinc}`
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return ; 
    }

</script>

<div class="container" >
    <input class="input" placeholder="Nome do Trabalhador" bind:value={nmTrab}/>
    <input class="input" placeholder="CPF" bind:value={cpfTrab}/>
    <select class="select" bind:value={sexo}>
        <option disabled selected>Sexo</option>
        <option value="M">M</option>
        <option value="F">F</option>
    </select>
    <fieldset class="fieldset">
        <legend class="fieldset-legend">Data de Nascimento</legend>
        <input class="input" type="date" placeholder="Data de Nascimento" bind:value={dtNascto} />
        <span class="label">Obrigatório</span>
    </fieldset>
    <select class="select" bind:value={paisNascto}>
        <option disabled selected>País de Nascimento</option>
        <option>Brasil</option>
        <option>Exterior</option>
    </select>
    <select class="select" bind:value={estCiv}>
        <option disabled selected>Estado Civil</option>
        <option value="1">1 - Solteiro</option>
        <option value="2">2 - Casado</option>
        <option value="3">3 - Divorciado</option>
        <option value="4">4 - Separado</option>
        <option value="5">5 - Viúvo</option>
    </select>
    <select class="select" bind:value={racaCor}>
        <option disabled selected>Etnia/Raça</option>
        <option value="1">1 - Branca</option>
        <option value="2">2 - Preta</option>
        <option value="3">3 - Parda</option>
        <option value="4">4 - Amarela</option>
        <option value="5">5 - Indígena</option>
        <option value="6">6 - Não informado</option>
    </select>
    <select class="select" bind:value={grauInstr}>
        <option disabled selected>Grau de Instrução do Trabalhador</option>
        <option value="01">01 - Analfabeto, inclusive o que, embora tenha recebido instrução, não se alfabetizou</option>
        <option value="02">02 - Até o 5º ano incompleto do ensino fundamental (antiga 4ª série) ou que se tenha alfabetizado sem ter frequentado escola regular</option>
        <option value="03">03 - 5º ano completo do ensino fundamental</option>
        <option value="04">04 - Do 6º ao 9º ano do ensino fundamental incompleto (antiga 5ª a 8ª série)</option>
        <option value="05">05 - Ensino fundamental completo</option>
        <option value="06">06 - Ensino médio incompleto</option>
        <option value="07">07 - Ensino médio completo</option>
        <option value="08">08 - Educação superior incompleta</option>
        <option value="09">09 - Educação superior completa</option>
        <option value="10">10 - Pós-graduação completa</option>
        <option value="11">11 - Mestrado completo</option>
        <option value="12">12 - Doutorado completo</option>
    </select>
    <select class="select" bind:value={tpLograd}>
        <option disabled selected>Tipo de Logradouro</option>
    	<option value="R">Rua</option>
    	<option value="AV">Avenida</option>
    	<option value="PC">Praça</option>
    	<option value="ROD">Rodovia</option>
    	<option value="EST">Estrada</option>
    	<option value="FAZ">Fazenda</option>
    	<option value="GJA">Granja</option>
    	<option value="SIT">Sítio</option>
    	<option value="VL">Vila</option>
    </select>
    <input type="text" placeholder="Descrição do Logradouro" class="input" bind:value={dscLograd} />
    <input type="text" placeholder="Número do Logradouro" class="input" defaultValue="S/N" bind:value={nrLograd}/>
    <input type="text" placeholder="Complemento" class="input" bind:value={complemento}/>
    <input type="text" placeholder="Bairro" class="input"  bind:value={bairro}/>
    <input type="text" placeholder="CEP" class="input" bind:value={cep} />
    <input type="text" placeholder="Código do Município" class="input" bind:value={codMunic} /> <!-- Consultar código do município na tabela do IBGE -->
    <select class="select" bind:value={uf}>
        <option disabled selected>Unidade Federativa</option>
    	{#each estados as estado}
    	<option value={estado}>{estado}</option>
    	{/each}
    </select>
    <input type="text" placeholder="Telefone" class="input" bind:value={fonePrinc} />
    <input type="email" placeholder="E-mail" class="validator input" bind:value={emailPrinc}/>
    <select class="select" bind:value={defFisica}>
        <option disabled selected>Deficiência física</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select" bind:value={defVisual}>
        <option disabled selected>Deficiência visual</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select" bind:value={defAuditiva}>
        <option disabled selected>Deficiência auditiva</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select" bind:value={defMental}>
        <option disabled selected>Deficiência mental</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select" bind:value={defIntelectual}>
        <option disabled selected>Deficiência intelectual</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select" bind:value={reabReadap}>
        <option disabled selected>Trabalhador reabilitado ou readaptado ?</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select" bind:value={infoCota}>
        <option disabled selected>Cota para deficientes ou beneficiário reabilitado ? </option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <fieldset class="fieldset">
        <legend class="fieldset-legend">Possui dependentes ?</legend>
        <select class="select" bind:value={dependentes}>
           <option disabled selected> Dependentes ?</option>
           <option value="S">S - Sim</option>
           <option value="N">N - Não</option>
        </select>
    </fieldset>
    <div class="w-full space-y-4 text-center">
	    <hr class="hr" />
    </div>
    <div id="dependenteElement" >
    </div>
    {#if dependentes == "S"}
    <button class="btn" onclick={adicionarDependente}>Adicionar dependente</button>
    {/if}
    <button class="btn" onclick={cadastrarTrab}>Finalizar Cadastro</button>
    <!-- Formulário dos dependentes-->
</div>
