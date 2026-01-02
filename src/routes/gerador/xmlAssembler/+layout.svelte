<script>

    import xmlFormat from 'xml-formatter'; 

    let cpfTrab = $state(''); 
    let nmTrab = $state(''); 
    let sexo = $state(''); 
    let racaCor = $state(''); 
    let estCiv = $state(''); 
    let grauInstr = $state(''); 
    let nmSoc = $state(''); 
    let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
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
	let observacaoInfoDeficiencia = $state('');
	let tpDep = $state(''); 
	let nmDep = $state(''); 
	let dtNasctoDep = $state(''); 
	let cpfDep = $state(''); 
	let sexoDep = $state(''); 
	let depIRRF = $state(''); 
	let depSF = $state(''); 
	let incTrab = $state(''); 
	let descrDep = $state('');  
	let fonePrinc = $state(''); 
	let emailPrinc = $state(''); 
	let dtAdm = $state(''); 
	let tpAdmissao = $state(''); 
	let indAdmissao = $state(''); 
	let nrProcTrab = $state(''); 
	let tpRegJor = $state(''); 
	let natAtividade = $state(''); 
	let dtBase = $state(''); 
	let cnpjSindCategProf = $state(''); 
	let matAnotJud = $state(''); 
	let dtOpcFGTS = $state(''); 
	let hipLeg = $state(''); 
	let justContr = $state(''); 
	let tpInscVinc = $state(''); 
	let nrInscVinc = $state(''); 
	let cpfTrabSubst = $state(''); 
	let indAprend = $state(''); 
	let cnpjEntQual = $state(''); 
	let tpInscAprend = $state(''); 
	let nrInscAprend = $state(''); 
	let cnpjPrat = $state(''); 
	let tpProv = $state(''); 
	let dtExercicio = $state(''); 
	let tpPlanRP = $state(''); 
	let indTetoRGPS = $state(''); 
	let indAbonoPerm = $state(''); 
	let dtIniAbono = $state(''); 
	let nmCargo = $state(''); 
	let CBOCargo = $state(''); 
	let dtIngCargo = $state(''); 
	let nmFuncao = $state(''); 
	let CBOFuncao = $state(''); 
	let acumCargo = $state(''); 
	let codCateg = $state('');
	let vrSalFx = $state(''); 
	let undSalFixo = $state(''); 
	let dscSalVar = $state(''); 
	let tpContr = $state(''); 
	let dtTerm = $state(''); 
	let clauAssec = $state(''); 
	let objDet = $state(''); 
	let tpInscLocalTrabGeral = $state(''); 
	let nrInscLocalTrabGeral = $state(''); 
	let descComp = $state(''); 
	let qtdHrsSem = $state(''); 
	let tpJornada = $state(''); 
	let tmpParc = $state(''); 
	let horNoturno = $state(''); 
	let dscJorn = $state(''); 
	let nrProcJud = $state(''); 
	let observacao = $state(''); 
	let codTreiCap = $state(''); 
	let tpInscrVinc = $state(''); 
	let nrInscrVinc = $state(''); 
	let matricAnt = $state(''); 
	let dtTransfVinc = $state(''); 
	let observacaoVinc = $state(''); 
	let cpfSubstituido = $state(''); 
	let matriculaAntTransfDom = $state(''); 
	let dtTransfTransfDom = $state(''); 
	let dtIniAfast = $state(''); 
	let codMotAfast = $state(''); 
	let dtDeslig = $state(''); 
	let dtIniCessao = $state(''); 
	let localTempDom = $state(''); 
	let indRetif = $state(''); 
	let nrRecibo = $state(''); 
	let tpAmb = $state(''); 
	let procEmi = $state(''); 
	let verProc = $state(''); 
	let cpfTrabIdeVinculo = $state(''); 
	let matriculaIdeVinculo = $state(''); 
	let codCategIdeVinculo = $state(''); 
	let tpExameOcup = $state(''); 
	let dtAso = $state(''); 
	let resAso = $state(''); 
	let dtExm = $state(''); 
	let procRealizado = $state(''); 
	let obsProc = $state(''); 
	let ordExame = $state(''); 
	let indResult = $state(''); 
	let nmMed = $state(''); 
	let nrCRM = $state(''); 
	let ufCRM = $state(''); 
	let cpfResp = $state(''); 
	let nmResp = $state(''); 
	let nrCRMRespMonit = $state(''); 
	let ufCRMRespMonit = $state('');
	let paisResidExt = $state(''); 
	let dscLogradExt = $state(''); 
	let nrLogradExt = $state(''); 
	let complementoExt = $state(''); 
	let bairroExt = $state(''); 
	let nmCidExt = $state(''); 
	let codPostalExt = $state(''); 
	let matriculaVinc = $state(''); 
	let tpRegTrabVinc = $state(''); 
	let tpRegPrevVinc = $state(''); 
	let cadIni = $state(''); 
	let tpInscIdeEstabVinc = $state('');
	let nrInscIdeEstabVinc = $state('');  
	let matricula = $state(''); 
	let tpRegTrab = $state(''); 
	let tpRegPrev = $state(''); 
	let tpInscIdeEmpregador = $state(''); 
	let nrInscIdeEmpregador = $state(''); 
	let tmpResid = $state(''); 
	let condImig = $state(''); 
	let matricAntSucessaoVinc = $state(''); 
	let dtTransfSucessaoVinc = $state(''); 
	let observacaoSucessaoVinc = $state(''); 
	let cpfAnt = $state(''); 
	let matricAntMudancaCPF = $state(''); 
	let dtAltCPF = $state(''); 
	let observacaoMudancaCPF = $state(''); 
	// control variables 
	let eventoTab = $state(true);  
	let empregadorTab = $state(false); 
	let trabalhadorTab = $state(false);  
	let vinculoTab = $state(false); 
	let celetista = $derived(tpRegTrab == '1'); // avalia condição ( true or false )

	let estatutario = $derived(tpRegTrab == '2');  // avalia condição ( true or false )
	// optional variables 
	let nrReciboExists = $state(''); 


	let evento = $state(''); // contains the type of the event 
	let cpfEmpregador = $state(''); // CPF do empregador
	let nrTrab = $state(''); 
	let tpInscSucessaoVinc = $state(''); 

	function salvarBtn() {
		eventoTab = false; 
		empregadorTab = true;
		return;  
	}

	function gerarFormBtn(){
		empregadorTab = false; 
		trabalhadorTab = true; 
		return; 
	}

	function criarVinculoBtn() {
		trabalhadorTab = false; 
		vinculoTab = true; 
		return;
	}


//    let grupos = $derived({
//        'trabalhador': `
//        <trabalhador>
//            <cpfTrab>${cpfTrab}</cpfTrab>
//            <nmTrab>${nmTrab}</nmTrab>
//            <sexo>${sexo}</sexo>
//            <racaCor>${racaCor}</racaCor>
//            <estCiv>${estCiv}</estCiv>
//            <grauInstr>${grauInstr}</grauInstr>
//            <nmSoc></nmSoc>
//        </trabalhador>
//        `,
//        'nascimento' : `
//		<nascimento>
//			<dtNascto>${dtNascto}</dtNascto>
//			<paisNascto>${paisNascto}</paisNascto>
//			<paisNac>${paisNac}</paisNac>
//		</nascimento>
//		`, 
//		'brasil' : `
//		<brasil>
//			<tpLogra>${tpLograd}</tpLograd>
//			<dscLograd>${dscLograd}</dscLograd>
//			<nrLograd>${nrLograd}</nrLograd>
//			<complemento>${complemento}</complemento>
//			<bairro>${bairro}</bairro>
//			<cep>${cep}</cep>
//			<codMunic>${codMunic}</codMunic>
//			<uf>${uf}</uf>
//		</brasil>
//		`,
//		'infoDeficiencia': `
//		<infoDeficiencia>
//			<defFisica>${defFisica}</defFisica>
//			<defVisual>${defVisual}</defVisual>
//			<defAuditiva>${defAuditiva}</defAuditiva>
//			<defMental>${defMental}</defMental>
//			<defIntelectual>${defIntelectual}</defIntelectual>
//			<reabReadap>${reabReadap}</reabReadap>
//			<infoCota>${infoCota}</infoCota>
//			<observacao>${observacaoInfoDeficiencia}</observacao>
//		</infoDeficiencia>
//		`,
//		'dependente': `
//		<dependente>
//			<tpDep>${tpDep}</tpDep>
//			<nmDep>${nmDep}</nmDep>
//			<dtNascto>${dtNasctoDep}</dtNascto>
//			<cpfDep>${cpfDep}</cpfDep>
//			<sexoDep>${sexoDep}</sexoDep>
//			<depIRRF>${depIRRF}</depIRRF>
//			<depSF>${depSF}</depSF>
//			<incTrab>${incTrab}</incTrab>
//			<descrDep>${descrDep}</descrDep>
//		</dependente>
//		`, 
//		'contato' : `
//		<contato>
//			<fonePrinc>${fonePrinc}</fonePrinc>
//			<emailPrinc>${emailPrinc}</emailPrinc>
//		</contato>
//		`, 
//		'vinculo': `
//		<matricula>${matricula}</matricula>
//		<tpRegTrab>${tpRegTrab}</tpRegTrab>
//		<tpRegPrev>${tpRegPrev}</tpRegPrev>
//		<cadIni>${cadIni}</cadIni>
//		`, 
//		'infoCeletista': `
//		<infoCeletista>
//			<dtAdm>${dtAdm}</dtAdm>
//			<tpAdmissao>${tpAdmissao}</tpAdmissao>
//			<indAdmissao>${indAdmissao}</indAdmissao>
//			<nrProcTrab>${nrProcTrab}</nrProcTrab>
//			<tpRegJor>${tpRegJor}</tpRegJor>
//			<natAtividade>${natAtividade}</natAtividade>
//			<dtBase>${dtBase}</dtBase>
//			<cnpjSindCategProf>${cnpjSindCategProf}</cnpjSindCategProf>
//			<matAnotJud>${matAnotJud}</matAnotJud>
//			${grupos.FGTS}
//			${grupos.trabTemporario}
//			${grupos.aprend}	
//		</infoCeletista>
//		`,
//		'FGTS' : `
//		<FGTS>
//			<dtOpcFGTS>${dtOpcFGTS}</dtOpcFGTS>
//		</FGTS>
//		`,
//		'trabTemporario':`
//		<trabTemporario>
//			<hipLeg>${hipLeg}</hipLeg>
//			<justContr>${justContr}</justContr>
//			${grupos.ideEstabVinc}
//			${grupos.ideTrabSubstituido}
//		</trabTemporario>
//		`,
//		'ideEstabVinc':`
//			<ideEstabVinc>
//				<tpInsc>${tpInscVinc}</tpInsc>
//				<nrInsc>${nrInscVinc}</nrInsc>	
//			</ideEstabVinc>
//		`, 
//		'ideTrabSubstituido': `
//			<ideTrabSubstituido>
//				<cpfTrabSubst>${cpfTrabSubst}</cpfTrabSubst>
//			<ideTrabSubstituido>
//		`,
//		'aprend' : `
//		<aprend>
//			<indAprend>${indAprend}</indAprend>
//			<cnpjEntQual>${cnpjEntQual}</cnpjEntQual>
//			<tpInsc>${tpInscAprend}</tpInsc>
//			<nrInsc>${nrInscAprend}</nrInsc>
//			<cnpjPrat>${cnpjPrat}</cnpjPrat>
//		</aprend>
//		`,
//		'infoEstatutario': `
//			<infoEstatutario>
//				<tpProv>${tpProv}</tpProv>
//				<dtExercicio>${dtExercicio}</dtExercicio>
//				<tpPlanRP>${tpPlanRP}</tpPlanRP>
//				<indTetoRGPS>${indTetoRGPS}</indTetoRGPS>
//				<indAbonoPerm>${indAbonoPerm}</indAbonoPerm>
//				<dtIniAbono>${dtIniAbono}</dtIniAbono>
//			</infoEstatutario>
//		`,
//		'infoContrato': `
//			<infoContrato>
//				<nmCargo>${nmCargo}</nmCargo>
//				<CBOCargo>${CBOCargo}</CBOCargo>
//				<dtIngrCargo>${dtIngrCargo}</dtIngrCargo>
//				<nmFuncao>${nmFuncao}</nmFuncao>
//				<CBOFuncao>${CBOFuncao}</CBOFuncao>
//				<acumCargo>${acumCargo}</acumCargo>
//				<codCateg>${codCateg}</codCateg>
//				${grupos.remuneracao}
//				${grupos.duracao}
//				<localTrabalho>
//					${grupos.localTrabGeral}
//					${grupos.localTempDom}	
//				</localTrabalho>
//				${grupos.horContratual}
//				${grupos.alvaraJudicial}
//				${grupos.observacoes}
//				${grupos.treiCap}
//			</infoContrato>
//		`,
//		'remuneracao' : `
//			<remuneracao>
//				<vrSalFx>${vrSalFx}</vrSalFx>
//				<undSalFixo>${undSalFixo}</undSalFixo>
//				<dscSalVar>${dscSalVar}</dscSalVar>
//			</remuneracao>
//		`,
//		'duracao': `
//			<duracao>
//				<tpContr>${tpContr}</tpContr>
//				<dtTerm>${dtTerm}</dtTerm>
//				<clauAssec>${clauAssec}</clauAssec>
//				<objDet>${objDet}</objDet>	
//			</duracao>
//		`,
//		'localTrabGeral': `
//			<localTrabGeral>
//				<tpInsc>${tpInscLocalTrabGeral}</tpInsc>
//				<nrInsc>${nrInscLocalTrabGeral}</nrInsc>
//				<descComp>${descComp}</descComp>
//			</localTrabGeral>
//		`,
//		'horContratual': `
//			<horContratual>
//				<qtdHrsSem>${qtdHrsSem}</qtdHrsSem>
//				<tpJornada>${tpJornada}</tpJornada>
//				<tmpParc>${tmpParc}</tmpParc>
//				<horNoturno>${horNoturno}</horNoturno>
//				<dscJorn>${dscJorn}</dscJorn>
//			</horContratual>
//		`,
//		'alvaraJudicial': `
//			<alvaraJudicial>
//				<nrProcJud>${nrProcJud}</nrProcJud>	
//			</alvaraJudicial>
//		`,
//		'observacoes': `
//			<observacoes>
//				<observacao>${observacao}</observacao>
//			</observacoes>
//		`,
//		'treiCap': `
//			<treiCap>
//				<codTreiCap>${codTreiCap}</codTreiCap>	
//			</treiCap>
//		`,
//		'sucessaoVinc' : `
//			<sucessaoVinc>
//				<tpInsc>${tpInscVinc}</tpInsc>
//				<nrInsc>${nrInscVinc}</nrInsc>
//				<matricAnt>${matricAnt}</matricAnt>
//				<dtTransf>${dtTransfVinc}</dtTransf>
//				<observacao>${observacaoVinc}<observacao>
//			</sucessaoVinc>
//		`,
//		'transfDom' : `
//			<transfDom>
//				<cpfSubstituido>${cpfSubstituido}</cpfSubstituido>
//				<matricAnt>${matriculaAntTransfDom}</matricAnt>
//				<dtTransf>${dtTransfTransfDom}</dtTransf>	
//			</transfDom>
//		`,
//		'mudancaCPF': `
//			<mudancaCPF>
//				<cpfAnt>${cpfAnt}</cpfAnt>
//				<matricAnt>${matricAntMudancaCPF}</matricAnt>
//				<dtAltCPF>${dtAltCPF}</dtAltCPF>
//				<observacao>${observacaoMudancaCPF}</observacao>	
//			</mudancaCPF>
//		`,
//		'afastamento': `
//			<afastamento>
//				<dtIniAfast>${dtIniAfast}</dtIniAfast>
//				<codMotAfast>${codMotAfast}</codMotAfast>	
//			</afastamento>
//		`,
//		'desligamento': `
//			<desligamento>
//				<dtDeslig>${dtDeslig}</dtDeslig>
//			</desligamento>
//		`,
//		'cessao': `
//			<cessao>
//				<dtIniCessao>${dtIniCessao}</dtIniCessao>
//			</cessao>
//		`,
//		'localTempDom' : `
//			<localTempDom>${localTempDom}</localTempDom>
//		`,
//		'ideEvento': `
//			<ideEvento>
//				<indRetif>${indRetif}</indRetif>
//				<nrRecibo>${nrRecibo}</nrRecibo>
//				<tpAmb>${tpAmb}</tpAmb>
//				<procEmi>${procEmi}</procEmi>
//				<verProc>${verProc}</verProc>
//			</ideEvento>
//		`,
//		'ideEmpregador': `
//			<ideEmpregador>
//				<tpInsc>${tpInscIdeEmpregador}</tpInsc>
//				<nrInsc>${nrInscIdeEmpregador}</nrInsc>	
//			</ideEmpregador>
//		`,
//		'ideVinculo' : `
//			<ideVinculo>
//				<cpfTrab>${cpfTrabIdeVinculo}</cpfTrab>
//				<matricula>${matriculaIdeVinculo}</matricula>
//				<codCateg>${codCategIdeVinculo}</codCateg>
//			</ideVinculo>
//		`,
//		'exMedOcup' : `
//			<exMedOcup>
//				<tpExameOcup>${tpExameOcup}</tpExameOcup>
//			</exMedOcup>
//		`,
//		'aso': `
//			<aso>
//				<dtAso>${dtAso}</dtAso>
//				<resAso>${resAso}</resAso>
//			</aso>
//		`,
//		'exame' : `
//			<exame>
//				<dtExm>${dtExm}</dtExm>
//				<procRealizado>${procRealizado}</procRealizado>
//				<obsProc>${obsProc}</obsProc>
//				<ordExame>${ordExame}</ordExame>
//				<indResult>${indResult}</indResult>	
//			</exame>
//			
//		`,
//		'medico' : `
//			<medico>
//				<nmMed>${nmMed}</nmMed>
//				<nrCRM>${nrCRM}</nrCRM>
//				<ufCRM>${ufCRM}</ufCRM>
//			</medico>
//		`,
//		'respMonit' : `
//			<respMonit>
//				<cpfResp>${cpfResp}</cpfResp>
//				<nmResp>${nmResp}</nmResp>
//				<nrCRM>${nrCRMRespMonit}</nrCRM>
//				<ufCRM>${ufCRMRespMonit}</ufCRM>
//			</respMonit>
//		`,
//    })
//
//	let gruposCompostos = $derived({"trabalhador": `
//		<trabalhador>
//			<cpfTrab>${cpfTrab}</cpfTrab>
//            <nmTrab>${nmTrab}</nmTrab>
//            <sexo>${sexo}</sexo>
//            <racaCor>${racaCor}</racaCor>
//            <estCiv>${estCiv}</estCiv>
//            <grauInstr>${grauInstr}</grauInstr>
//            <nmSoc></nmSoc>
//			${grupos.nascimento}
//			<endereco>
//				${grupos.brasil}
//				${grupos.exterior}
//			</endereco>
//			${grupos.infoDeficiencia}
//			${grupos.dependente}
//			${grupos.contato}
//		</trabalhador>
//	`, 
//	"vinculo" : `
//		<vinculo>
//			<matricula>${matriculaVinc}</matricula>
//			<tpRegTrab>${tpRegTrab}</tpRegTrab>
//			<tpRegPrev>${tpRegPrev}</tpRegPrev>
//			<cadIni>${cadIni}</cadIni>
//			<infoRegimeTrab>
//				${grupos.infoCeletista}
//				${grupos.infoEstatutario}
//			</infoRegimeTrab>
//			${grupos.infoContrato}
//			${grupos.sucessaoVinc}
//			${grupos.transfDom}
//			${grupos.mudancaCPF}
//			${grupos.afastamento}
//			${grupos.desligamento}
//			${grupos.cessao}
//		</vinculo>
//	`,})


	let eventos = $derived({'s2200': `
<eSocial xmlns="http://www.esocial.gov.br/schema/evt/evtAdmissao/v_S_01_03_00">
    <evtAdmissao Id="">
        <ideEvento>
			<indRetif>${indRetif}</indRetif>
			<nrRecibo>${nrRecibo}</nrRecibo>
			<tpAmb>${tpAmb}</tpAmb>
			<procEmi>${procEmi}</procEmi>
			<verProc>${verProc}</verProc>
        </ideEvento>
        <ideEmpregador>
			<tpInsc>${tpInscIdeEmpregador}</tpInsc>
			<nrInsc>${nrInscIdeEmpregador}</nrInsc>
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
					<paisResid>${paisResidExt}</paisResid>
					<dscLograd>${dscLogradExt}</dscLograd>
					<nrLograd>${nrLogradExt}</nrLograd>
					<complemento>${complementoExt}</complemento>
					<bairro>${bairroExt}</bairro>
					<nmCid>${nmCidExt}</nmCid>
					<codPostal>${codPostalExt}</codPostal>
                </exterior>
            </endereco>
			<trabImig>
				<tmpResid>${tmpResid}</tmpResid>
				<condIng>${condImig}</condIng>
			</trabImig>
            <infoDeficiencia>
				<defFisica>${defFisica}</defFisica>
				<defVisual>${defVisual}</defVisual>
				<defAuditiva>${defAuditiva}</defAuditiva>
				<defMental>${defMental}</defMental>
				<defIntelectual>${defIntelectual}</defIntelectual>
				<reabReadap>${reabReadap}</reabReadap>
				<infoCota>${infoCota}</infoCota>
				<observacao>${observacaoInfoDeficiencia}<observacao>
            </infoDeficiencia>
            <dependente> 
                <tpDep>${tpDep}</tpDep>
                <nmDep>${nmDep}</nmDep>
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
            <matricula>${matriculaVinc}</matricula>
            <tpRegTrab>${tpRegTrabVinc}</tpRegTrab>
            <tpRegPrev>${tpRegPrevVinc}</tpRegPrev>
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
                    <trabTemporario>
						<hipLeg>${hipLeg}</hipLeg>
						<justContr>${justContr}</justContr> 
                        <ideEstabVinc>
							<tpInsc>${tpInscIdeEstabVinc}</tpInsc>
							<nrInsc>${nrInscIdeEstabVinc}</nrInsc>
						</ideEstabVinc>
                        <ideTrabSubstituido>
							<cpfTrabSubst>${cpfTrabSubst}</cpfTrabSubst>
						</ideTrabSubstituido>
                    </trabTemporario>
                    <aprend>
						<indAprend>${indAprend}</indAprend>
						<cnpjEntQual>${cnpjEntQual}</cnpjEntQual>
						<tpInsc>${tpInscAprend}</tpInsc>
						<nrInsc>${nrInscAprend}</nrInsc>
						<cnpjPrat>${cnpjPrat}</cnpjPrat>
					</aprend> 
                </infoCeletista>
                <infoEstatutario>
					<tpProv>${tpProv}</tpProv>
					<dtExercicio>${dtExercicio}</dtExercicio>
					<tpPlanRP>${tpPlanRP}</tpPlanRP>
					<indTetoRGPS>${indTetoRGPS}</indTetoRGPS>
					<indAbonoPerm>${indAbonoPerm}</indAbonoPerm>
					<dtIniAbono>${dtIniAbono}</dtIniAbono>
				</infoEstatutario>
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
                    <clauAssec>${clauAssec}</clauAssec>
                    <objDet>${objDet}</objDet>
                </duracao>
                <localTrabalho>
                    <localTrabGeral>
                        <tpInsc>${tpInscLocalTrabGeral}</tpInsc>
                        <nrInsc>${nrInscLocalTrabGeral}</nrInsc>
                        <descComp>${descComp}</descComp>
                    </localTrabGeral>
                    <localTempDom>${localTempDom}</localTempDom>
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
				<tpInsc>${tpInscVinc}</tpInsc>
				<nrInsc>${nrInscVinc}</nrInsc>
				<matricAnt>${matricAntSucessaoVinc}</matricAnt>
				<dtTransf>${dtTransfSucessaoVinc}</dtTransf>
				<observacao>${observacaoSucessaoVinc}</observacao>
			</sucessaoVinc>
            <transfDom>
				<cpfSubstituido>${cpfSubstituido}</cpfSubstituido>
				<matricAnt>${matriculaAntTransfDom}</matricAnt>
				<dtTransf>${dtTransfTransfDom}</dtTransf>
			</transfDom>
            <mudancaCPF>
				<cpfAnt>${cpfAnt}</cpfAnt>
				<matricAnt>${matricAntMudancaCPF}</matricAnt>
				<dtAltCPF>${dtAltCPF}</dtAltCPF>
				<observacao>${observacaoMudancaCPF}</observacao>
			</mudancaCPF>
            <afastamento>
                <dtIniAfast>${dtIniAfast}</dtIniAfast>
                <codMotAfast>${codMotAfast}</codMotAfast>
            </afastamento>
            <desligamento>
                <dtDeslig>${dtDeslig}</dtDeslig>
            </desligamento>
            <cessao> 
                <dtIniCessao>${dtIniCessao}</dtIniCessao>
            </cessao>
        </vinculo>
    </evtAdmissao>
	${signature}
</eSocial>`})

//    let msg = $derived(`
//    <eSocial>
//		<evtAdmissao>
//		${grupos.ideEvento}
//		${grupos.ideEmpregador}
//        ${gruposCompostos.trabalhador}
//		${gruposCompostos.vinculo}
//		</evtAdmissao>
//    </eSocial>
//    `)

	let signature = `
				<ds:Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
				<SignedInfo>
				<CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n20010315" />
				<SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsasha256" />
				<Reference URI="">
				<Transforms>
				<Transform Algorithm="http://www.w3.org/2000/09/xmldsig#envelopedsignature" />
				<Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
				</Transforms>
				<DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
				<DigestValue>CFJEIy1dUko99nNUW/ICvG9ZNoij0o9IOhdP6Nt1j1k=</DigestValue>
				</Reference>
				</SignedInfo>
				<SignatureValue>...</SignatureValue>
				<KeyInfo>
				<X509Data>
				<X509Certificate>...</X509Certificate>
				</X509Data>
				</KeyInfo>
				</ds:Signature>
				</eSocial>`

	let lote = $derived(`
	<?xml version="1.0" encoding="UTF-8"?>
	<eSocial xmlns="http://www.esocial.gov.br/schema/evt/evtAdmissao/v_S_01_03_00">
		<envioLoteEventos grupo="2">
			<ideEmpregador>
				<tpInsc>${tpInscIdeEmpregador}</tpInsc>
				<nrInsc>${nrInscIdeEmpregador}</nrInsc>
			</ideEmpregador>
			<ideTransmissor>
				<tpInsc>1</tpInsc>
				<nrInsc>31301171000184</nrInsc>
			</ideTransmissor>
			<eventos>
				<evento Id="">
					${eventos.s2200}
				</evento>
			</eventos>
		</envioLoteEventos>
	`); 




    function gerarXML(){
        let formattedXML = xmlFormat.minify(eventos.s2200, {
            filter: (node) => node.type !== 'Comment',
            collapseContent: true
        })
        console.log(formattedXML); 
    }
</script>
{#if eventoTab}
<div class="container">
	<form class="w-full max-w-md space-y-4 p-4">
		<fieldset>
		<label class="label">
		<span class="label-text">Selecione o tipo de Evento ( original ou retificação )</span>
		<select class="select" bind:value={indRetif} placeholder="Tipo de Evento">
			<option checked disabled>Tipo de Evento</option>
			<option value="1">1 - Original</option>
			<option value="2">2 - Retificação</option>
		</select>
		</label>
		</fieldset>

	{#if indRetif == "2"}
	<fieldset>
		<label class="label">
			<span><br></span>
			<span class="label-text">Digite o número do recibo</span>
			<input class="input" placeholder="Número do Recibo" bind:value={nrRecibo}/>
		</label>
	</fieldset>
	{/if}
	<fieldset>
		<label class="label">
			<span class="label-text">Evento</span>
			<select class="select" bind:value={evento}>
				<option disabled checked>Selecionar Evento</option>
				<option value="s2200">S-2200</option>
				<option value="s2220">S-2220</option>
			</select>
		</label>
	</fieldset>
	<span></span>
	<button type="button" class="btn preset-filled" onclick={salvarBtn}>Salvar</button>
	</form>
</div>
{/if}

{#if empregadorTab}
<div class="container">
	<form class="w-full max-w-md space-y-4 p-4">
		<fieldset>
			<legend>Dados do Empregador</legend>
			<br>
			<label class="label">
				<span class="label-text">Tipo de Inscrição ( 1-CNPJ ; 2-CPF )</span>
				<input class="input" type="text" placeholder="CPF" bind:value={tpInscIdeEmpregador}/>
			</label>
		</fieldset>
		<fieldset>
			<label class="label">
				<span class="label-text">Número de Inscrição</span>
				<input class="input" type="text" placeholder="Número de Inscrição" bind:value={nrInscIdeEmpregador}/>
			</label>
		</fieldset>
		<button type="button" class="btn preset-filled" onclick={gerarFormBtn}>Gerar Formulário</button>
	</form>
</div>
{/if}

{#if trabalhadorTab}
<div class="container">
	<!--Informcações relativas ao empregador --> <!-- Grupo :  'ideEmpregador' -->
    <button type="button" class="btn preset-filled" onclick={criarVinculoBtn}>Criar Vínculo</button>
</div>
{/if}
<!--Informações do vínculo -->
<!---->
<!---->
<div class="container">
<form class="w-full max-w-md space-y-4 p-4">
	{#if vinculoTab}
	<fieldset>
			<label class="label">
				<span class="label-text">Matrícula do Vínculo</span>
				<input type="text" placeholder="Matrícula do Vínculo" class="input" bind:value={matriculaVinc} />
			</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Regime Trabalhista</span>
			<select class="select" bind:value={tpRegTrab} >
				<option disabled>Tipo de Regime Trabalhista</option>
				<option value="1">1 - CLT - Consolidação das Leis de Trabalho e legislações trabalhistas específicas</option>
				<option value="2">2 - Estatutário/legislações específicas (servidor temporário, militar, agente político, etc.)</option>
			</select>
		</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Tipo de Regime Previdenciário</span>
			<select class="select" bind:value={tpRegPrev}>
				<option disabled selected>Tipo de Regime Previdenciário</option>
				<option value="1">1 - Regime Geral de Previdência Social - RGPS</option>
				<option value="2">2 - Regime Próprio de Previdência Social - RPPS, Regime dos Parlamentares e Sistema de Proteção dos Militares dos Estados/DF</option>
				<option value="3">3 - Regime de Previdência Social no exterior</option>
				<option value="4">4 - Sistema de Proteção Social dos Militares das Forças Armadas - SPSMFA</option>
			</select>
		</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Cadastro Inicial</span>
			<select class="select" bind:value={cadIni}>
				<option>Cadastro Inicial</option>
				<option value="S">S - Sim (Cadastramento Inicial)</option>
				<option value="N">N - Não (Admissão)</option>
			</select>
		</label>
	</fieldset>
	{#if celetista }
	<fieldset>
			<label class="label">
				<span class="label-text">Data de Admissão</span>
				<input type="date" placeholder="Data de Admissão" class="input" bind:value={dtAdm}/>
			</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Tipo de Admissão</span>
			<select class="select" bind:value={tpAdmissao}>
				<option disabled selected>Tipo de Admissão</option>
				<option value="1">1 - Admissão</option>
				<option value="2">2 - Transferência de empresa do mesmo grupo econômico ou transferência entre órgãos do mesmo Ente Federativo</option>
				<option value="3">3 - Transferência de empresa consorciada ou de consórcio</option>
				<option value="4">4 - Transferência por motivo de sucessão, incorporação, cisão ou fusão</option>
				<option value="5">5 - Transferência do empregado doméstico para outro representante da mesma unidade familiar</option>
				<option value="6">6 - Mudança de CPF</option>
				<option value="7">7 - Transferência quando a empresa sucedida é considerada inapta por inexistência de fato</option>
			</select>
		</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Indicativo de Admissão</span>
			<select class="select" bind:value={indAdmissao}>
				<option disabled selected>Indicativo de Admissão</option>
				<option value="1">1 - Normal</option>
				<option value="2">2 - Decorrente de ação fiscal</option>
				<option value="3">3 - Decorrente de decisão judicial</option>
			</select>
		</label>
	</fieldset>
			<fieldset>
			<label class="label">
				<span class="label-text">Número de Processo do Trabalho</span>
				<input type="text" placeholder="Número de Processo Trabalho" class="input" bind:value={nrProcTrab}/>
			</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Regime de Jornada do Empregado</span>
			<select class="select" bind:value={tpRegJor}>
				<option disabled selected>Regime de jornada do empregado</option>
				<option value="1">1 - Submetido a horário de trabalho (Capítulo II do Título II da CLT)</option>
				<option value="2">2 - Atividade externa especificada no inciso I do art. 62 da CLT</option>
				<option value="3">3 - Função especificada no inciso II do art. 62 da CLT</option>
				<option value="4">4 - Teletrabalho, previsto no inciso III do art. 62 da CLT</option>
			</select>
		</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Natureza da Atividade</span>
			<select class="select" bind:value={natAtividade}>
    			<option disabled selected>Natureza da Atividade</option>
    			<option value="1">1 - Trabalho urbano</option>
    			<option value="2">2 - Trabalho rural</option>
			</select>
		</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Data Base</span>
				<input type="date" placeholder="Data Base" class="input" bind:value={dtBase} />
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">CNPJ do Sindicato</span>
				<input type="text" placeholder="CNPJ do Sindicato" class="input" bind:value={cnpjSindCategProf}/>
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Matrícula no S-8200</span>
				<input type="text" placeholder="Matrícula no S-8200" class="input" bind:value={matAnotJud} />
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Data da opção pelo FGTS</span>
				<input type="date" placeholder="Data da opção pelo FGTS" class="input" bind:value={dtOpcFGTS} /> <!-- 85-->
			</label>
	</fieldset>
	<!-- trabTemporario -->
	 <fieldset>
		<label class="label">
			<span class="label-text">Hipótese Legal</span>
			<select class="select" bind:value={hipLeg}>
				<option>1 - Necessidade de substituição transitória de pessoal permanente</option>
				<option>2 - Demanda complementar de serviços</option>
			</select>
		</label>
	 </fieldset>
	{/if}
	{#if estatutario }
	<fieldset>
			<label class="label">
				<span class="label-text">Nome do Cargo</span>
				<input type="text" placeholder="Nome do Cargo" class="input" bind:value={nmCargo}/> <!-- 108-->
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">CBO do Cargo</span>
				<input type="text" placeholder="CBO do Cargo" class="input" bind:value={CBOCargo} /> <!-- 109.  Ver tabela de CBO -->
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Data de Ingresso no Cargo</span>
				<input type="date" placeholder="Data de Ingresso no Cargo" class="input" bind:value={dtIngCargo} />
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Nome da Função de Confiança/Cargo em comissão</span>
				<input type="text" placeholder="Nome da Função de Confiança/Cargo em comissão" class="input" bind:value={nmFuncao} />
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">CBO da Função de Confiança</span>
				<input type="text" placeholder="CBO da Função de Confiança" class="input" bind:value={CBOFuncao} />
			</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Cargo ou Função Acumulável ? </span>
			<select class="select" bind:value={acumCargo}>
    			<option disabled selected>Cargo ou Função Acumulável ?</option>
    			<option value="S">S - Sim</option>
    			<option value="N">N - Não</option>
			</select>
		</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Código da Categoria</span>
				<input type="text" placeholder="Código da Categoria" class="input" bind:value={codCateg}/>
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Salário Base do Trabalhador</span>
				<input
					type="text"
					placeholder="Salário Base do Trabalhador ( parte fixa da remuneração )"
					class="input"
					bind:value={vrSalFx}
				/>
			</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Unidade de pagamento da parte fixa da remuneração</span>
			<select class="select" bind:value={undSalFixo}>
        		<option disabled selected>Unidade de pagamento da parte fixa da remuneração</option>
        		<option value="1">1 - Por hora</option>
        		<option value="2">2 - Por dia</option>
        		<option value="3">3 - Por semana</option>
				<option value="4">4 - Por quinzena</option>
        		<option value="5">5 - Por mês</option>
        		<option value="6">6 - Por tarefa</option>
			<option value="7">7 - Não aplicável - Salário exclusivamente variável</option>
    		</select>
		</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Descrição do salário por tarefa ou variável</span>
			<input type="text" placeholder="Descrição do salário por tarefa ou variável" class="input" bind:value={dscSalVar}/>
		</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Tipo de Contrato de Trabalho</span>
    			<select class="select" bind:value={tpContr}>
    			    <option disabled selected>Tipo de contrato de trabalho</option>
    			    <option value="1">1 - Prazo indeterminado</option>
    			    <option value="2">2 - Prazo determinado, definido em dias</option>
    			    <option value="3">3 - Prazo determinado, vinculado à ocorrência de um fato</option>
    			</select>
			</label>
	</fieldset>
			<fieldset>
			<label class="label">
				<span class="label-text">Data do Término do Contrato por prazo determinado</span>
				<input type="date" placeholder="Data do Término do Contrato por prazo determinado" class="input" bind:value={dtTerm}/>
			</label>
		</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Cláusula Assecuratória ?</span>
    		<select class="select" bind:value={clauAssec}>
    		    <option disabled selected>Contém cláusula assecuratória ?</option>
    		    <option value="S">S - Sim</option>
    		    <option value="N">N - Não</option>
    		</select>
		</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Objeto Determinante da Contratação por prazo determinado</span>
				<input type="text" placeholder="Objeto Determinante da Contratação por prazo determinado ( obra, serviço, safra, etc. )" class="input" bind:value={objDet} />
			</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Tipo de Inscrição do Local de Trabalho</span>
    		<select class="select" bind:value={tpInscLocalTrabGeral}>
    		    <option disabled selected>Tipo de inscrição do local de trabalho</option>
    		    <option value="1">1 - CNPJ</option>
    		    <option value="3">3 - CAEPF</option>
    		    <option value="4">4 - CNO</option>
    		</select>
		</label>
	</fieldset>
			<fieldset>
			<label class="label">
				<span class="label-text">Número de Inscrição do Local de Trabalho</span>
				<input type="text" placeholder="Número de Inscrição do Local de Trabalho" class="input" bind:value={nrInscLocalTrabGeral} /> <!-- Deve ser um número de inscrição válido e existente na tabela de estabelecimentos S-1005 -->
			</label>
		</fieldset>
				<fieldset>
			<label class="label">
				<span class="label-text">Descrição Complementar do Local de Trabalho</span>
				<input type="text" placeholder="Descrição Complementar do Local de Trabalho" class="input" bind:value={descComp} />
			</label>
		</fieldset>
				<fieldset>
			<label class="label">
				<span class="label-text">Quantidade de Horas Semanais</span>
				<input type="text" placeholder="Quantidade de Horas Semanais" class="input" bind:value={qtdHrsSem} />
			</label>
		</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Tipo de Jornada</span>
    		<select class="select" bind:value={tpJornada}>
        		<option disabled selected>Tipo de Jornada</option>
        		<option value="2">2 - Jornada 12 x 36 (12 horas de trabalho seguidas de 36 horas ininterruptas de descanso)</option>
        		<option value="3">3 - Jornada com horário diário fixo e folga variável</option>
        		<option value="4">4 - Jornada com horário diário fixo e folga fixa (no domingo)</option>
				<option value="5">5 - Jornada com horário diário fixo e folga fixa (exceto no domingo)</option>
				<option value="6">6 - Jornada com horário diário fixo e folga fixa (em outro dia da semana), com folga adicional periódica no domingo</option>
				<option value="7">7 - Turno ininterrupto de revezamento</option>
				<option value="9">9 - Demais tipos de jornada</option>
    		</select>
		</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Código do tipo de contrato em tempo parcial</span>
    		<select class="select" bind:value={tmpParc}>
    		    <option disabled selected>Código relativo ao tipo de contrato em tempo parcial</option>
    		    <option value="0">0 - Não é contrato em tempo parcial</option>
    		    <option value="1">1 - Limitado a 25 horas semanais</option>
    		    <option value="2">2 - Limitado a 30 horas semanais</option>
				<option value="3">3 - Limitado a 26 horas semanais</option>
    		</select>
		</label>
	</fieldset>
	<fieldset>
		<label class="label">
			<span class="label-text">Horário Noturno ? </span>
    		<select class="select" bind:value={horNoturno}>
    		    <option disabled selected>Horário noturno</option>
    		    <option value="S">S - Sim</option>
    		    <option value="N">N - Não</option>
    		</select>
		</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Descrição da Jornada Semanal Contratual</span>
				<input type="text" placeholder="Descrição da Jornada Semanal Contratual" class="input" bind:value={dscJorn} />
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Número do Processo Judicial</span>
				<input type="text" placeholder="Número do Processo Judicial" class="input" bind:value={nrProcJud} />
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Observação relacionada ao Contrato de Trabalho</span>
				<input type="text" placeholder="Observação relacionada ao Contrato de Trabalho" class="input" bind:value={observacao} /> <!-- 139 -->
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Código do Treinamento de Capacitação</span>
				<input type="text" placeholder="Código do Treinamento de Capacitação" class="input" bind:value={codTreiCap} /> <!-- 141  conforme tabela 28 -->
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Data do Início do Afastamento</span>
				<input type="date" placeholder="Data de Início do Afastamento" class="input" bind:value={tpInscVinc}/>
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Código do Motivo do Afastamento</span>
				<input type="text" placeholder="Código do Motivo do Afastamento" class="input" bind:value={codMotAfast}/> <!-- 159  código do motivo de afastamento temporário ,  tabela 18 -->
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Data do Desligamento</span>
				<input type="date" placeholder="Data do Desligamento" class="input" bind:value={dtDeslig}/>
			</label>
	</fieldset>
	<fieldset>
			<label class="label">
				<span class="label-text">Data do Início da Cessão</span>
				<input type="date" placeholder="Data do Início da Cessão" class="input" bind:value={dtIniCessao} />
			</label>
	</fieldset>
	<button type="button" class="btn preset-filled">Imprimir Banco de dados</button>
{/if}
{/if}
</form>
</div>

<slot></slot>

<style>
    .container{
        display: flex;
        margin: auto;
        width: 50%;
        flex-direction: column;
    }
</style>
