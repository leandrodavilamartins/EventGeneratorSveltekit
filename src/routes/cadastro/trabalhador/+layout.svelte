<script>
    let { children } = $props(); 
    import {db} from '$lib/firebaseApp'
    import {collection, addDoc, setDoc, doc, getDocs} from 'firebase/firestore'; 
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
    let deficiencia = $state(false); 
    let defFisica = $state('N'); 
    let defVisual = $state('N'); 
    let defAuditiva = $state('N'); 
    let defMental = $state('N'); 
    let defIntelectual = $state('N'); 
    let reabReadap = $state('N'); 
    let infoCota = $state('N'); 
    let observacaoDef = $state(''); 
    let fonePrinc = $state(''); 
    let emailPrinc = $state(''); 
    // control variables 
    let dependenteFormControl = $state(''); 

    let dependentesObj = $state([]); 

    // dependentes variables 
    let tpDep = $state(''); 
    let nmDep = $state(''); 
    let dtNasctoDep = $state(''); 
    let cpfDep = $state(''); 
    let sexoDep = $state(''); 
    let depIRRF = $state(''); 
    let depSF = $state(''); 
    let incTrab = $state(''); 
    let descrDep = $state(''); 
    let dependentesCounter = $state(1); 
    let msgDependenteSalvo = $state(false); 
    let empregadoresList = $state([]);
    


    function deficienciaForm() {
        let deficienteSelectValue = document.querySelector('#deficienteSelectElement').value; 
        if(deficienteSelectValue = 'S') {
            deficiencia = true; 
        } 
        else {
            deficiencia = false; 
        }
        window.scrollTo({top: document.body.scrollHeight, left:0, behavior:"smooth"}); 
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
                fonePrinc: `${fonePrinc}`,
                emailPrinc: `${emailPrinc}`, 
                dependentes: `${dependentesObj}`
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return ; 
    }

    function printDepObj(){
        let obj = {"tpDep": `${tpDep}`, "nmDep": `${nmDep}`, "dtNascto": `${dtNasctoDep}`, "cpfDep": `${cpfDep}`, "sexoDep": `${sexoDep}`, "depIRRF": `${depIRRF}`, "depSF": `${depSF}`, "incTrab":`${incTrab}`, "descrDep": `${descrDep}`}; 
        console.log(obj); 
        dependentesObj.push(obj); 
        return ; 
    }

    function limparCamposDep(){
        document.querySelector('#tpDep').value = ''; 
        document.querySelector('#nmDep').value = '';  
        document.querySelector('#dtNasctoDep').value = ''; 
        document.querySelector('#cpfDep').value = ''; 
        document.querySelector('#sexoDep').value = ''; 
        document.querySelector('#depIRRF').value = ''; 
        document.querySelector('#depSF').value = ''; 
        document.querySelector('#incTrab').value = ''; 
        document.querySelector('#descrDep').value = ''; 
        return; 
    }

    function salvarDependente(){
        let obj = {"tpDep": `${tpDep}`, "nmDep": `${nmDep}`, "dtNascto": `${dtNasctoDep}`, "cpfDep": `${cpfDep}`, "sexoDep": `${sexoDep}`, "depIRRF": `${depIRRF}`, "depSF": `${depSF}`, "incTrab":`${incTrab}`, "descrDep": `${descrDep}`}; 
        dependentesObj.push(obj); 
        console.log(obj); 
        msgDependenteSalvo = true; 
        document.querySelector('#tpDep').disabled = true; 
        document.querySelector('#nmDep').disabled = true;  
        document.querySelector('#dtNasctoDep').disabled = true; 
        document.querySelector('#cpfDep').disabled = true; 
        document.querySelector('#sexoDep').disabled = true; 
        document.querySelector('#depIRRF').disabled = true; 
        document.querySelector('#depSF').disabled = true; 
        document.querySelector('#incTrab').disabled = true; 
        document.querySelector('#descrDep').disabled = true; 
        document.querySelector('#salvarDepBtn').disabled = true; 
        return ; 
    }

    function novoDependente(){
        dependentesCounter = dependentesCounter + 1;
        msgDependenteSalvo = false;  
        document.querySelector('#tpDep').disabled = false; 
        document.querySelector('#nmDep').disabled = false;  
        document.querySelector('#dtNasctoDep').disabled = false; 
        document.querySelector('#cpfDep').disabled = false; 
        document.querySelector('#sexoDep').disabled = false; 
        document.querySelector('#depIRRF').disabled = false; 
        document.querySelector('#depSF').disabled = false; 
        document.querySelector('#incTrab').disabled = false; 
        document.querySelector('#descrDep').disabled = false; 
        document.querySelector('#salvarDepBtn').disabled = false; 
        document.querySelector('#tpDep').value = ''; 
        document.querySelector('#nmDep').value = '';  
        document.querySelector('#dtNasctoDep').value = ''; 
        document.querySelector('#cpfDep').value = ''; 
        document.querySelector('#sexoDep').value = ''; 
        document.querySelector('#depIRRF').value = ''; 
        document.querySelector('#depSF').value = ''; 
        document.querySelector('#incTrab').value = ''; 
        document.querySelector('#descrDep').value = ''; 
        return; 
    }

    async function buscarEmpregadores(){
        // lógica para buscar empregadores
        console.log("Buscar empregadores clicado"); 
        let empregadoresCol = collection(db, 'empregadores');
        let empregadoresSnapshot = await getDocs(empregadoresCol);
        empregadoresList = empregadoresSnapshot.docs.map(doc => doc.data());
        console.log(empregadoresList[0]);
    }

</script>

<div>
    <p>Antes de iniciar o cadastro, selecione o empregador : </p>
    <button type="button" class="btn preset-filled" onclick={buscarEmpregadores}>Buscar Empregadores</button>

    <div class="table-wrap">
	<table class="table caption-bottom">
			<thead>
				<tr>
					<th>Nome</th>
					<th>CPF</th>
					<th>Email</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
            <tbody>
			{#each empregadoresList as empregador}
                    <tr>
						<td>{empregador.nome}</td>
						<td>{empregador.cpf}</td>
						<td>{empregador.email}</td>
						<td class="text-right">
							<a class="btn btn-sm preset-filled" href="#">
								View &rarr;
							</a>
						</td>
					</tr>
            {/each}
		</tbody>
	</table>
</div>

</div>

<div class="container" >
    <form class="w-full max-w-md space-y-4 p-4">

    <fieldset>
        <label class="label">
            <span class="label-text">Nome do Trabalhador</span>
            <input class="input" placeholder="Nome do Trabalhador" bind:value={nmTrab}/>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">CPF do Trabalhador</span>
            <input class="input" placeholder="CPF" bind:value={cpfTrab}/>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Sexo</span>
            <select class="select" bind:value={sexo}>
                <option disabled selected>Sexo</option>
                <option value="M">M</option>
                <option value="F">F</option>
            </select>
        </label>
    </fieldset>


    <fieldset class="fieldset">
        <label class="label">
            <span class="label-text">Data de Nascimento</span>
            <input class="input" type="date" placeholder="Data de Nascimento" bind:value={dtNascto} />
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">País de Nascimento</span>
            <select class="select" bind:value={paisNascto}>
                <option selected>Brasil</option>
                <option>Exterior</option>
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Estado Civil</span>
            <select class="select" bind:value={estCiv}>
                <option disabled selected>Estado Civil</option>
                <option value="1">1 - Solteiro</option>
                <option value="2">2 - Casado</option>
                <option value="3">3 - Divorciado</option>
                <option value="4">4 - Separado</option>
                <option value="5">5 - Viúvo</option>
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Raça/Cor</span>
            <select class="select" bind:value={racaCor}>
                <option disabled selected>Etnia/Raça</option>
                <option value="1">1 - Branca</option>
                <option value="2">2 - Preta</option>
                <option value="3">3 - Parda</option>
                <option value="4">4 - Amarela</option>
                <option value="5">5 - Indígena</option>
                <option value="6">6 - Não informado</option>
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Grau de Instrução</span>
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
        </label>
    </fieldset>


    <fieldset>
        <label class="label">
            <span class="label-text">Tipo de Logradouro</span>
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
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Descrição do Logradouro</span>
            <input type="text" placeholder="Descrição do Logradouro" class="input" bind:value={dscLograd} />
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Número</span>
            <input type="text" placeholder="Número do Logradouro" class="input" defaultValue="S/N" bind:value={nrLograd}/>
        </label>
    </fieldset>


    <fieldset>
        <label class="label">
            <span class="label-text">Complemento</span>
            <input type="text" placeholder="Complemento" class="input" bind:value={complemento}/>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Bairro</span>
            <input type="text" placeholder="Bairro" class="input"  bind:value={bairro}/>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">CEP</span>
            <input type="text" placeholder="CEP" class="input" bind:value={cep} />
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Código do Município ( de acordo com tabela do IBGE )</span>
            <input type="text" placeholder="Código do Município" class="input" bind:value={codMunic} /> <!-- Consultar código do município na tabela do IBGE -->
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Unidade Federativa</span>
            <select class="select" bind:value={uf}>
                <option disabled selected>Unidade Federativa</option>
            	{#each estados as estado}
            	<option value={estado}>{estado}</option>
            	{/each}
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Telefone</span>
            <input type="text" placeholder="Telefone" class="input" bind:value={fonePrinc} />
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">E-mail</span>
            <input type="email" placeholder="E-mail" class="validator input" bind:value={emailPrinc}/>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Deficiente ?</span>
            <select id="deficienteSelectElement"  class="select" onchange={deficienciaForm}> <!-- ERRO !!!!  -->
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

    {#if deficiencia  }
    <div class="w-full space-y-4 text-center">
        <p></p>
	    <hr class="hr" />
        <p></p>
    </div>
    <fieldset>
        <label class="label">
            <span class="label-text">Deficiência Física ? </span>
            <select class="select" bind:value={defFisica}>
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

        <fieldset>
        <label class="label">
            <span class="label-text">Deficiência Visual ? </span>
            <select class="select" bind:value={defVisual}>
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Deficiência Auditiva ? </span>
            <select class="select" bind:value={defAuditiva} >
                <option disabled selected>Deficiência auditiva</option>
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

        <fieldset>
        <label class="label">
            <span class="label-text">Deficiência Mental ?</span>
            <select class="select" bind:value={defMental}>
                <option disabled selected>Deficiência mental</option>
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Deficiência Intelectual ? </span>
            <select class="select" bind:value={defIntelectual}>
                <option disabled selected>Deficiência intelectual</option>
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

        <fieldset>
        <label class="label">
            <span class="label-text">Reabilitado ou Readaptado</span>
            <select class="select" bind:value={reabReadap}>
                <option disabled selected>Trabalhador reabilitado ou readaptado ?</option>
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Cota para Deficientes ou Beneficiário Reabilitado ? </span>
            <select class="select" bind:value={infoCota}>
                <option disabled selected>Cota para deficientes ou beneficiário reabilitado ? </option>
                <option value="N">N - Não</option>
                <option value="S">S - Sim</option>
            </select>
        </label>
    </fieldset>

    <fieldset>
        <label class="label">
            <span class="label-text">Observação sobre Deficiência</span>
            <input class="input" type="text" placeholder="Observação" bind:value={observacaoDef}/>
        </label>
    </fieldset>
    <div class="w-full space-y-4 text-center">
        <p></p>
	    <hr class="hr" />
        <p></p>
    </div>
    {/if}

    <fieldset class="fieldset">
        <span class="label-text">Possui Dependentes ?</span>
        <select class="select" bind:value={dependentes}>
           <option disabled selected> Dependentes ?</option>
           <option value="N">N - Não</option>
           <option value="S">S - Sim</option>
        </select>
    </fieldset>
    </form>
    </div>


    <div class="w-full space-y-4 text-center">
	    <hr class="hr" />
    </div>


    <div id="dependenteElement" > <!-- <div> que contém os formulários dos dependentes -->
    </div>

    <!-- INFORMAÇÕES DOS DEPENDENTES -->

    <!-- INFORMAÇÕES DOS DEPENDENTES -->

    <!-- INFORMAÇÕES DOS DEPENDENTES -->
    <div id="dependentesDiv">
    {#if dependentes == "S"}
    <button class="btn btn preset-filled" onclick={() => dependente_01.showModal()}>Adicionar Dependente</button>
     <dialog id="dependente_01" > <!--You could try to add some transparency to the Modal -->
       <fieldset>
            <legend>Dependente {dependentesCounter}</legend>
            <label class="label">
                <span class="label-text">Tipo de Dependente</span>
                <select id="tpDep"  class="select" bind:value={tpDep}>
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
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">Nome do Dependente</span>
                <input id="nmDep" class="input" type="text" bind:value={nmDep} />
            </label>
        </fieldset>
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">Data de Nascimento</span>
                <input id="dtNasctoDep" class="input" type="date" bind:value={dtNasctoDep}/>
            </label>
        </fieldset>
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">CPF</span>
                <input id="cpfDep" class="input" type="text" bind:value={cpfDep} />
            </label>
        </fieldset>
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">Sexo</span>
                <select id="sexoDep" class="select" bind:value={sexoDep}>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
                <span>*Preenchimento obrigatório em caso de dedução do Imposto de Renda</span>
            </label>
        </fieldset>
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">Dependente IRRF</span>
                <select id="depIRRF" class="select" bind:value={depIRRF}>
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
            </label>
        </fieldset>
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">Dependente Salário-Família</span>
                <select id="depSF" class="select" bind:value={depSF} >
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
            </label>
        </fieldset>
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">Incapacidade para o trabalho ? </span>
                <select id="incTrab" class="select" bind:value={incTrab} >
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
            </label>
        </fieldset>
        <br>
        <fieldset>
            <label class="label">
                <span class="label-text">Descrição da Dependência </span>
                <input id="descrDep" class="input" type="text" bind:value={descrDep} />
                <span>* Obrigatório em caso de "Agregado/outros". </span>
            </label>
        </fieldset>
        <br>
        <button id="salvarDepBtn" class="btn preset-filled" type="button" onclick={salvarDependente} >Salvar Dependente</button>
        <button class="btn preset-filled" type="button" onclick={limparCamposDep} >Limpar</button>
        <button class="btn preset-filled" type="button" onclick={novoDependente} >Novo Dependente</button>
        {#if msgDependenteSalvo}
        <p>Dependente salvo com sucesso ! </p>
        {/if}
     </dialog>
    {/if}
    <button type="button" class="btn preset-filled-primary-500" onclick={cadastrarTrab}>Finalizar Cadastro</button>
    <!-- Formulário dos dependentes-->
    </div>

{@render children()}

<style>
    .container{
        display: flex;
        margin: auto;
        justify-content: center;
    }

    #dependentesDiv{
        display: flex;
        margin: auto;
        justify-content: center;
        flex-direction: column;
        width: 20%;
        row-gap: 20px;
        
    }

    dialog {
        margin-right: auto;
        margin-left: 40%;
  /* Optional: for a full-height sidebar effect */
        height: 100vh;
        width: 20%;
  /* Ensure no default padding interferes with alignment */
        padding: 0; 
    }

</style>