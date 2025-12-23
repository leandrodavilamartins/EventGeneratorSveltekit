<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseApp'; 
	import { getFirestore, collection, getDocs } from 'firebase/firestore';

	let cpf = ''; 
	let ano = ''; 
	let mes = ''; 
	let dia = ''; 
	let hora = ''; 
	let minuto = ''; 
	let segundo = ''; 
	let chave = ''
	let indRetif = ''; // hardcoded
	let nrRecibo = ''; // hardcoded
	let tpAmb = ''; // hardcoded
	let procEmi = ''; // hardcoded
	let verProc = ''; // hardcoded
	let tpInsc = ''; // hardcoded
	let nrInsc = ''; // hardcoded
	let cpfTrab = '';
	let nmTrab = '';
	let sexo = '';
	let racaCor = '';
	let estCiv = '';
	let grauInstr = '';
	let nmSoc = '';
	let dtNascto = '';
	let paisNascto = '';
	let paisNac = '';
	let tpLograd = '';
	let dscLograd = '';
	let nrLograd = '';
	let complemento = '';
	let bairro = '';
	let cep = '';
	let codMunic = '';
	let uf = '';
	let tpDep = '';
	let nrDep = '';
	let dtNasctoDep = '';
	let cpfDep = '';
	let sexoDep = '';
	let depIRRF = '';
	let depSF = '';
	let incTrab = '';
	let descrDep = '';
	let fonePrinc = '';
	let emailPrinc = '';
	let matricula = '';
	let tpRegTrab = '';
	let tpRegPrev = '';
	let cadIni = '';
	let dtAdm = '';
	let tpAdmissao = '';
	let indAdmissao = '';
	let nrProcTrab = '';
	let tpRegJor = '';
	let natAtividade = '';
	let dtBase = '';
	let cnpjSindCategProf = '';
	let matAnotJud = '';
	let dtOpcFGTS = '';
	let ideEstabVinc = '';
	let ideTrabSubstituido = '';
	let nmCargo = '';
	let CBOCargo = '';
	let dtIngrCargo = '';
	let nmFuncao = '';
	let CBOFuncao = '';
	let acumCargo = '';
	let codCateg = '';
	let vrSalFx = '';
	let undSalFixo = '';
	let dscSalVar = '';
	let tpContr = '';
	let dtTerm = '';
	let clauAssec = '';
	let objDet = '';
	let tpInsclocalTrabalho = '';
	let nrInsclocalTrabalho = '';
	let descComp = '';
	let qtdHrsSem = '';
	let tpJornada = '';
	let tmpParc = '';
	let horNoturno = '';
	let dscJorn = '';
	let nrProcJud = '';
	let observacao = '';
	let codTreiCap = '';
	let dtIniAfast = '';
	let codMotAfast = '';
	let dtDeslig = '';
	let dtIniCessao = '';
	let tpInscSuc = '';
	let nrInscSuc = '';
	let matricAnt = '';
	let dtTransfSuc = '';
	let observacaoSuc = '';
	let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
	let dependentes = false; 
	const funcionarios = []; 
	function xmlS2200() {
		let msg = `<?xml version="1.0" encoding="UTF-8"?>
<eSocial xmlns="http://www.esocial.gov.br/schema/evt/evtAdmissao/v_S_01_03_00">
    <evtAdmissao Id="ID${tpInsc}${cpf}${ano}${mes}${dia}${hora}${minuto}${segundo}${chave}">
        <ideEvento>
            <indRetif>${indRetif}</indRetif>
            <nrRecibo>${nrRecibo}</nrRecibo>
            <tpAmb>${tpAmb}</tpAmb>
            <procEmi>${procEmi}</procEmi>
            <verProc>${verProc}</verProc>
        </ideEvento>
        <ideEmpregador>
            <tpInsc>${tpInsc}</tpInsc>
            <nrInsc>${nrInsc}</nrInsc>
        </ideEmpregador>
        <trabalhador>
            <cpfTrab>${cpfTrab}</cpfTrab>
            <nmTrab>${nmTrab}</nmTrab>
            <sexo>${sexo}</sexo>
            <racaCor>${racaCor}</racaCor>
            <estCiv>${estCiv}</estCiv>
            <grauInstr>${grauInstr}</grauInstr>
            <nmSoc>${nmSoc}</nmSoc>
            <nascimento>
                <dtNascto>${dtNascto}</dtNascto>
                <paisNascto>${paisNascto}</paisNascto>
                <paisNac>${paisNac}</paisNac>
            </nascimento>
            <endereco>
                <brasil>
                    <tpLograd>${tpLograd}</tpLograd>
                    <dscLograd>${dscLograd}</dscLograd>
                    <nrLograd>${nrLograd}</nrLograd>
                    <complemento>${complemento}</complemento>
                    <bairro>${bairro}</bairro>
                    <cep>${cep}</cep>
                    <codMunic>${codMunic}</codMunic>
                    <uf>${uf}</uf>
                </brasil>
                <exterior>
                    <!-- Campos ignorados. Preencher somente em caso de trabalhador no exterior -->
                </exterior>
            </endereco>
            <infoDeficiencia>
                <!-- Campos ignorados. Preencher somente em caso de portador de deficiência -->
            </infoDeficiencia>
            <dependente> <!-- Preencher os campos abaixo em caso de dependente-->
                <tpDep>${tpDep}</tpDep>
                <nmDep>${nrDep}</nmDep>
                <dtNascto>${dtNasctoDep}</dtNascto>
                <cpfDep>${cpfDep}</cpfDep>
                <sexoDep>${sexoDep}</sexoDep>
                <depIRRF>${depIRRF}</depIRRF>
                <depSF>${depSF}</depSF>
                <incTrab>${incTrab}</incTrab>
                <descrDep>${descrDep}</descrDep>
            </dependente>
            <contato>
                <fonePrinc>${fonePrinc}</fonePrinc>
                <emailPrinc>${emailPrinc}</emailPrinc>
            </contato>
        </trabalhador>
        <vinculo>
            <matricula>${matricula}</matricula>
            <tpRegTrab>${tpRegTrab}</tpRegTrab>
            <tpRegPrev>${tpRegPrev}</tpRegPrev>
            <cadIni>${cadIni}</cadIni>
            <infoRegimeTrab>
                <infoCeletista>
                    <dtAdm>${dtAdm}</dtAdm>
                    <tpAdmissao>${tpAdmissao}</tpAdmissao>
                    <indAdmissao>${indAdmissao}</indAdmissao>
                    <nrProcTrab>${nrProcTrab}</nrProcTrab>
                    <tpRegJor>${tpRegJor}</tpRegJor>
                    <natAtividade>${natAtividade}</natAtividade>
                    <dtBase>${dtBase}</dtBase>
                    <cnpjSindCategProf>${cnpjSindCategProf}</cnpjSindCategProf>
                    <matAnotJud>${matAnotJud}</matAnotJud>
                    <FGTS>
                        <dtOpcFGTS>${dtOpcFGTS}</dtOpcFGTS>
                    </FGTS>
                    <trabTemporario> <!-- Preencher apenas se trabalho temporário -->
                        <ideEstabVinc>${ideEstabVinc}</ideEstabVinc>
                        <ideTrabSubstituido>${ideTrabSubstituido}</ideTrabSubstituido>
                    </trabTemporario>
                    <aprend></aprend> <!-- Grupo "aprendiz" . Preencher apenas se aprendiz -->
                </infoCeletista>
                <infoEstatutario><!-- Grupo "Trabalho estatutário"--></infoEstatutario>
            </infoRegimeTrab>
            <infoContrato>
                <nmCargo>${nmCargo}</nmCargo>
                <CBOCargo>${CBOCargo}</CBOCargo>
                <dtIngrCargo>${dtIngCargo}</dtIngrCargo>
                <nmFuncao>${nmFuncao}</nmFuncao>
                <CBOFuncao>${CBOFuncao}</CBOFuncao>
                <acumCargo>${acumCargo}</acumCargo>
                <codCateg>${codCateg}</codCateg>
                <remuneracao>
                    <vrSalFx>${vrSalFx}</vrSalFx>
                    <undSalFixo>${undSalFixo}</undSalFixo>
                    <dscSalVar>${dscSalVar}</dscSalVar>
                </remuneracao>
                <duracao>
                    <tpContr>${tpContr}</tpContr>
                    <dtTerm>${dtTerm}</dtTerm>
                    <clauAssec${clauAssec}></clauAssec>
                    <objDet>${objDet}</objDet>
                </duracao>
                <localTrabalho>
                    <localTrabGeral>
                        <tpInsc>${tpInsclocalTrabalho}</tpInsc>
                        <nrInsc>${nrInsclocalTrabalho}</nrInsc>
                        <descComp>${descComp}</descComp>
                    </localTrabGeral>
                    <localTempDom></localTempDom>
                </localTrabalho>
                <horContratual>
                    <qtdHrsSem>${qtdHrsSem}</qtdHrsSem>
                    <tpJornada>${tpJornada}</tpJornada>
                    <tmpParc>${tmpParc}</tmpParc>
                    <horNoturno>${horNoturno}</horNoturno>
                    <dscJorn>${dscJorn}</dscJorn>
                </horContratual>
                <alvaraJudicial>
                    <nrProcJud>${nrProcJud}</nrProcJud>
                </alvaraJudicial>
                <observacoes>
                    <observacao>${observacao}</observacao>
                </observacoes>
                <treiCap>
                    <codTreiCap>${codTreiCap}</codTreiCap>
                </treiCap>
            </infoContrato>
            <sucessaoVinc>
                <tpInsc>${tpInscSuc}</tpInsc>
                <nrInsc>${nrInscSuc}</nrInsc>
                <matricAnt${matricAnt}></matricAnt>
                <dtTransf>${dtTransfSuc}</dtTransf>
                <observacao>${observacaoSuc}</observacao>
            </sucessaoVinc>
            <transfDom><!-- Informações do empregado doméstico transferido--></transfDom>
            <mudancaCPF><!-- Em caso de mudança do CPF do trabalhador --></mudancaCPF>
            <afastamento>
                <dtIniAfast>${dtIniAfast}</dtIniAfast>
                <codMotAfast>${codMotAfast}</codMotAfast>
            </afastamento>
            <desligamento>
                <dtDeslig>${dtDeslig}</dtDeslig>
            </desligamento>
            <cessao> <!-- Preencher apenas em caso de cessão de trabalhador -->
                <dtIniCessao>${dtIniCessao}</dtIniCessao>
            </cessao>
        </vinculo>
    </evtAdmissao>
</eSocial>
`;
		return msg;
	}

	async function printFirestore(db) {
		const docs = await getDocs(collection(db, 'cadastrados'));
		docs.forEach( doc => console.log(doc.data()))
		return ; 
	}

	onMount( async() => {
		const docs = await getDocs(collection(db, 'cadastrados')); 
		docs.forEach( doc => funcionarios.push(doc.data())); 
		return ; 
	})

	function printDB(db) {
		console.log(typeof(db)); 
	}
	function printDocs() {
		console.log(funcionarios); 
		return ; 
	}
</script>

<div id="container">
	<input type="text" placeholder="Nome" class="input" />
	<input type="text" placeholder="CPF do Trabalhador" class="input" />
	<input type="text" placeholder="Número do Trabalhador" class="input" />
	<select class="select" bind:value={sexo} on:change={()=> console.log(sexo)}>
		<option disabled selected>Sexo</option>
		<option value="M">M - Masculino</option>
		<option value="F">F - Feminino</option>
	</select>
	<select class="select" bind:value={racaCor} on:change={()=> console.log(racaCor)}>
		<option disabled selected>Raça/Cor</option>
		<option value="1">1 - Branca</option>
		<option value="2">2 - Preta</option>
		<option value="3">3 - Parda</option>
		<option value="4">4 - Amarela</option>
		<option value="5">5 - Indígena</option>
		<option value="6">6 - Não informado</option>
	</select>
	<select class="select" bind:value={estCiv} on:change={() => console.log(estCiv)}>
		<option disabled selected>Estado Civil</option>
		<option value="1">Solteiro</option>
		<option value="2">Casado</option>
		<option value="3">Divorciado</option>
		<option value="4">Separado</option>
		<option value="5">Viúvo</option>
	</select>
	<select class="select" bind:value={grauInstr}>
		<option disabled selected>Grau de Instrução</option>
		<option value="01">Analfabeto, inclusive o que, embora tenha recebido instrução, não se alfabetizou</option>
		<option value="02">Até o 5º ano incompleto do ensino fundamental (antiga 4ª série) ou que se tenha alfabetizado sem ter frequentado escola regular</option>
		<option value="03">5º ano completo do ensino fundamental</option>
		<option value="04">Do 6º ao 9º ano do ensino fundamental incompleto (antiga 5ª a 8ª série)</option>
		<option value="05">Ensino fundamental completo</option>
		<option value="06">Ensino médio incompleto</option>
		<option value="07">Ensino médio completo</option>
		<option value="08">Educação superior incompleta</option>
		<option value="09">Educação superior completa</option>
		<option value="10">Pós-graduação completa</option>
		<option value="11">Mestrado completo</option>
		<option value="12">Doutorado completo</option>
	</select>
	<input type="date" placeholder="Data de Nascimento" class="input" />
	<input type="text" placeholder="País de Nascimento" class="input" defaultValue="105" /> <!--105 é o código para o "Brasil"-->
	<input type="text" placeholder="Nacionalidade" class="input" defaultValue="105"/> <!--105 é o código para o "Brasil"-->
	<select class="select" placeholder="Tipo de Logradouro">
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
	<input type="text" placeholder="Descrição do Logradouro" class="input" />
	<input type="text" placeholder="Número do Logradouro" class="input" defaultValue="S/N" />
	<input type="text" placeholder="Complemento" class="input" />
	<input type="text" placeholder="Bairro" class="input" />
	<input type="text" placeholder="CEP" class="input" />
	<input type="text" placeholder="Código do Município" class="input" /> <!-- Consultar código do município na tabela do IBGE -->
	<select class="select" placeholder="Unidade Federativa">
		{#each estados as estado}
		<option value={estado}>{estado}</option>
		{/each}
	</select>
	<input type="text" placeholder="Telefone" class="input" />
	<input type="email" placeholder="E-mail" class="validator input" />
	<input type="text" placeholder="Matrícula do Vínculo" class="input" />
	<select class="select">
		<option disabled selected>Tipo de Regime Trabalhista</option>
		<option value="1">1 - CLT - Consolidação das Leis de Trabalho e legislações trabalhistas específicas</option>
		<option value="2">2 - Estatutário/legislações específicas (servidor temporário, militar, agente político, etc.)</option>
	</select>
		<select class="select">
		<option disabled selected>Tipo de Regime Previdenciário</option>
		<option value="1">1 - Regime Geral de Previdência Social - RGPS</option>
		<option value="2">2 - Regime Próprio de Previdência Social - RPPS, Regime dos Parlamentares e Sistema de Proteção dos Militares dos Estados/DF</option>
		<option value="3">3 - Regime de Previdência Social no exterior</option>
		<option value="4">4 - Sistema de Proteção Social dos Militares das Forças Armadas - SPSMFA</option>
	</select>
	<select class="select">
		<option>Cadastro Inicial</option>
		<option value="S">S - Sim (Cadastramento Inicial)</option>
		<option value="N">N - Não (Admissão)</option>
	</select>
	<input type="date" placeholder="Data de Admissão" class="input" />
	<select class="select">
		<option disabled selected>Tipo de Admissão</option>
		<option value="1">1 - Admissão</option>
		<option value="2">2 - Transferência de empresa do mesmo grupo econômico ou transferência entre órgãos do mesmo Ente Federativo</option>
		<option value="3">3 - Transferência de empresa consorciada ou de consórcio</option>
		<option value="4">4 - Transferência por motivo de sucessão, incorporação, cisão ou fusão</option>
		<option value="5">5 - Transferência do empregado doméstico para outro representante da mesma unidade familiar</option>
		<option value="6">6 - Mudança de CPF</option>
		<option value="7">7 - Transferência quando a empresa sucedida é considerada inapta por inexistência de fato</option>
	</select>
	<select class="select">
		<option disabled selected>Indicativo de Admissão</option>
		<option value="1">1 - Normal</option>
		<option value="2">2 - Decorrente de ação fiscal</option>
		<option value="3">3 - Decorrente de decisão judicial</option>
	</select>
	<input type="text" placeholder="Número de Processo Trabalho" class="input" />
	<select class="select" bind:value={tpRegJor}>
		<option disabled selected>Regime de jornada do empregado</option>
		<option value="1">1 - Submetido a horário de trabalho (Capítulo II do Título II da CLT)</option>
		<option value="2">2 - Atividade externa especificada no inciso I do art. 62 da CLT</option>
		<option value="3">3 - Função especificada no inciso II do art. 62 da CLT</option>
		<option value="4">4 - Teletrabalho, previsto no inciso III do art. 62 da CLT</option>
	</select>
	<select class="select">
    	<option disabled selected>Natureza da Atividade</option>
    	<option value="1">1 - Trabalho urbano</option>
    	<option value="2">2 - Trabalho rural</option>
	</select>
	<input type="date" placeholder="Data Base" class="input" />
	<input type="text" placeholder="CNPJ do Sindicato" class="input" />
	<input type="text" placeholder="Matrícula no S-8200" class="input" />
	<input type="text" placeholder="Índice de Admissão" class="input" />
	<input type="date" placeholder="Data da opção pelo FGTS" class="input" /> <!-- 85-->
	<input type="text" placeholder="Nome do Cargo" class="input" /> <!-- 108-->
	<input type="text" placeholder="CBO do Cargo" class="input" /> <!-- 109.  Ver tabela de CBO -->
	<input type="date" placeholder="Data de Ingresso no Cargo" class="input" />
	<input type="text" placeholder="Nome da Função de Confiança/Cargo em comissão" class="input" />
	<input type="text" placeholder="CBO da Função de Confiança" class="input" />
	<select class="select">
    	<option disabled selected>Cargo ou Função Acumulável ?</option>
    	<option value="S">S - Sim</option>
    	<option value="N">N - Não</option>
	</select>
	<input type="text" placeholder="Código da Categoria" class="input" />
	<input
		type="text"
		placeholder="Salário Base do Trabalhador ( parte fixa da remuneração )"
		class="input"
	/>
	<select class="select">
        <option disabled selected>Unidade de pagamento da parte fixa da remuneração</option>
        <option value="1">1 - Por hora</option>
        <option value="2">2 - Por dia</option>
        <option value="3">3 - Por semana</option>
		<option value="4">4 - Por quinzena</option>
        <option value="5">5 - Por mês</option>
        <option value="6">6 - Por tarefa</option>
		<option value="7">7 - Não aplicável - Salário exclusivamente variável</option>
    </select>
	<input type="text" placeholder="Descrição do salário por tarefa ou variável" class="input" />
    <select class="select">
        <option disabled selected>Tipo de contrato de trabalho</option>
        <option value="1">1 - Prazo indeterminado</option>
        <option value="2">2 - Prazo determinado, definido em dias</option>
        <option value="3">3 - Prazo determinado, vinculado à ocorrência de um fato</option>
    </select>
	<input type="date" placeholder="Data do Término do Contrato por prazo determinado" class="input" />
    <select class="select">
        <option disabled selected>Contém cláusula assecuratória ?</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
	<input type="text" placeholder="Objeto Determinante da Contratação por prazo determinado ( obra, serviço, safra, etc. )" class="input" />
    <select class="select">
        <option disabled selected>Tipo de inscrição do local de trabalho</option>
        <option value="1">1 - CNPJ</option>
        <option value="3">3 - CAEPF</option>
        <option value="4">4 - CNO</option>
    </select>
	<input type="text" placeholder="Número de Inscrição do Local de Trabalho" class="input" /> <!-- Deve ser um número de inscrição válido e existente na tabela de estabelecimentos S-1005 -->
	<input type="text" placeholder="Descrição Complementar do Local de Trabalho" class="input" />
	<input type="text" placeholder="Quantidade de Horas Semanais" class="input" />
    <select class="select">
        <option disabled selected>Tipo de Jornada</option>
        <option value="2">2 - Jornada 12 x 36 (12 horas de trabalho seguidas de 36 horas ininterruptas de descanso)</option>
        <option value="3">3 - Jornada com horário diário fixo e folga variável</option>
        <option value="4">4 - Jornada com horário diário fixo e folga fixa (no domingo)</option>
		<option value="5">5 - Jornada com horário diário fixo e folga fixa (exceto no domingo)</option>
		<option value="6">6 - Jornada com horário diário fixo e folga fixa (em outro dia da semana), com folga adicional periódica no domingo</option>
		<option value="7">7 - Turno ininterrupto de revezamento</option>
		<option value="9">9 - Demais tipos de jornada</option>
    </select>
    <select class="select">
        <option disabled selected>Código relativo ao tipo de contrato em tempo parcial</option>
        <option value="0">0 - Não é contrato em tempo parcial</option>
        <option value="1">1 - Limitado a 25 horas semanais</option>
        <option value="2">2 - Limitado a 30 horas semanais</option>
		<option value="3">3 - Limitado a 26 horas semanais</option>
    </select>
    <select class="select">
        <option disabled selected>Horário noturno</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
	<input type="text" placeholder="Descrição da Jornada Semanal Contratual" class="input" />
	<input type="text" placeholder="Número do Processo Judicial" class="input" />
	<input type="text" placeholder="Observação relacionada ao Contrato de Trabalho" class="input" /> <!-- 139 -->
	<input type="text" placeholder="Treinamentos e Capacitações" class="input" />
	<input type="text" placeholder="Código do Treinamento de Capacitação" class="input" /> <!-- 141  conforme tabela 28 -->
	<input type="date" placeholder="Data de Início do Afastamento" class="input" />
	<input type="text" placeholder="Código do Motivo do Afastamento" class="input" /> <!-- 159  código do motivo de afastamento temporário ,  tabela 18 -->
	<input type="date" placeholder="Data do Desligamento" class="input" />
	<input type="date" placeholder="Data do Início da Cessão" class="input" />
	<button class="btn" on:click={printDocs}>Imprimir Banco de dados</button>
</div>

<slot></slot>

<style>
	#container {
		display: flex;
		flex-direction: column;
		margin-left: 10%;
		width: 80%;
		justify-items: left;
		row-gap: 15px;
		flex-wrap: wrap;
	}
</style>
