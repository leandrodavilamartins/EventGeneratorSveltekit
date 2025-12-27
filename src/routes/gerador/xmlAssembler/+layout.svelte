<script>
	import { info } from 'console';


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
	let tpRegPrevVinc = state(''); 
	let cadIni = $state(''); 
	let tpInscIdeEstabVinc = $state('');
	let nrInscIdeEstabVinc = $state('');  




	


    let grupos = $derived({
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
        `,
        'nascimento' : `
		<nascimento>
			<dtNascto>${dtNascto}</dtNascto>
			<paisNascto>${paisNascto}</paisNascto>
			<paisNac>${paisNac}</paisNac>
		</nascimento>
		`, 
		'brasil' : `
		<brasil>
			<tpLogra>${tpLograd}</tpLograd>
			<dscLograd>${dscLograd}</dscLograd>
			<nrLograd>${nrLograd}</nrLograd>
			<complemento>${complemento}</complemento>
			<bairro>${bairro}</bairro>
			<cep>${cep}</cep>
			<codMunic>${codMunic}</codMunic>
			<uf>${uf}</uf>
		</brasil>
		`,
		'infoDeficiencia': `
		<infoDeficiencia>
			<defFisica>${defFisica}</defFisica>
			<defVisual>${defVisual}</defVisual>
			<defAuditiva>${defAuditiva}</defAuditiva>
			<defMental>${defMental}</defMental>
			<defIntelectual>${defIntelectual}</defIntelectual>
			<reabReadap>${reabReadap}</reabReadap>
			<infoCota>${infoCota}</infoCota>
			<observacao>${observacaoInfoDeficiencia}</observacao>
		</infoDeficiencia>
		`,
		'dependente': `
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
		`, 
		'contato' : `
		<contato>
			<fonePrinc>${fonePrinc}</fonePrinc>
			<emailPrinc>${emailPrinc}</emailPrinc>
		</contato>
		`, 
		'vinculo': `
		<matricula>${matricula}</matricula>
		<tpRegTrab>${tpRegTrab}</tpRegTrab>
		<tpRegPrev>${tpRegPrev}</tpRegPrev>
		<cadIni>${cadIni}</cadIni>
		`, 
		'infoCeletista': `
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
			${grupos.FGTS}
			${grupos.trabTemporario}
			${grupos.aprend}	
		</infoCeletista>
		`,
		'FGTS' : `
		<FGTS>
			<dtOpcFGTS>${dtOpcFGTS}</dtOpcFGTS>
		</FGTS>
		`,
		'trabTemporario':`
		<trabTemporario>
			<hipLeg>${hipLeg}</hipLeg>
			<justContr>${justContr}</justContr>
			${grupos.ideEstabVinc}
			${grupos.ideTrabSubstituido}
		</trabTemporario>
		`,
		'ideEstabVinc':`
			<ideEstabVinc>
				<tpInsc>${tpInscVinc}</tpInsc>
				<nrInsc>${nrInscVinc}</nrInsc>	
			</ideEstabVinc>
		`, 
		'ideTrabSubstituido': `
			<ideTrabSubstituido>
				<cpfTrabSubst>${cpfTrabSubst}</cpfTrabSubst>
			<ideTrabSubstituido>
		`,
		'aprend' : `
		<aprend>
			<indAprend>${indAprend}</indAprend>
			<cnpjEntQual>${cnpjEntQual}</cnpjEntQual>
			<tpInsc>${tpInscAprend}</tpInsc>
			<nrInsc>${nrInscAprend}</nrInsc>
			<cnpjPrat>${cnpjPrat}</cnpjPrat>
		</aprend>
		`,
		'infoEstatutario': `
			<infoEstatutario>
				<tpProv>${tpProv}</tpProv>
				<dtExercicio>${dtExercicio}</dtExercicio>
				<tpPlanRP>${tpPlanRP}</tpPlanRP>
				<indTetoRGPS>${indTetoRGPS}</indTetoRGPS>
				<indAbonoPerm>${indAbonoPerm}</indAbonoPerm>
				<dtIniAbono>${dtIniAbono}</dtIniAbono>
			</infoEstatutario>
		`,
		'infoContrato': `
			<infoContrato>
				<nmCargo>${nmCargo}</nmCargo>
				<CBOCargo>${CBOCargo}</CBOCargo>
				<dtIngrCargo>${dtIngrCargo}</dtIngrCargo>
				<nmFuncao>${nmFuncao}</nmFuncao>
				<CBOFuncao>${CBOFuncao}</CBOFuncao>
				<acumCargo>${acumCargo}</acumCargo>
				<codCateg>${codCateg}</codCateg>
				${grupos.remuneracao}
				${grupos.duracao}
				<localTrabalho>
					${grupos.localTrabGeral}
					${grupos.localTempDom}	
				</localTrabalho>
				${grupos.horContratual}
				${grupos.alvaraJudicial}
				${grupos.observacoes}
				${grupos.treiCap}
			</infoContrato>
		`,
		'remuneracao' : `
			<remuneracao>
				<vrSalFx>${vrSalFx}</vrSalFx>
				<undSalFixo>${undSalFixo}</undSalFixo>
				<dscSalVar>${dscSalVar}</dscSalVar>
			</remuneracao>
		`,
		'duracao': `
			<duracao>
				<tpContr>${tpContr}</tpContr>
				<dtTerm>${dtTerm}</dtTerm>
				<clauAssec>${clauAssec}</clauAssec>
				<objDet>${objDet}</objDet>	
			</duracao>
		`,
		'localTrabGeral': `
			<localTrabGeral>
				<tpInsc>${tpInscLocalTrabGeral}</tpInsc>
				<nrInsc>${nrInscLocalTrabGeral}</nrInsc>
				<descComp>${descComp}</descComp>
			</localTrabGeral>
		`,
		'horContratual': `
			<horContratual>
				<qtdHrsSem>${qtdHrsSem}</qtdHrsSem>
				<tpJornada>${tpJornada}</tpJornada>
				<tmpParc>${tmpParc}</tmpParc>
				<horNoturno>${horNoturno}</horNoturno>
				<dscJorn>${dscJorn}</dscJorn>
			</horContratual>
		`,
		'alvaraJudicial': `
			<alvaraJudicial>
				<nrProcJud>${nrProcJud}</nrProcJud>	
			</alvaraJudicial>
		`,
		'observacoes': `
			<observacoes>
				<observacao>${observacao}</observacao>
			</observacoes>
		`,
		'treiCap': `
			<treiCap>
				<codTreiCap>${codTreiCap}</codTreiCap>	
			</treiCap>
		`,
		'sucessaoVinc' : `
			<sucessaoVinc>
				<tpInsc>${tpInscVinc}</tpInsc>
				<nrInsc>${nrInscVinc}</nrInsc>
				<matricAnt>${matricAnt}</matricAnt>
				<dtTransf>${dtTransfVinc}</dtTransf>
				<observacao>${observacaoVinc}<observacao>
			</sucessaoVinc>
		`,
		'transfDom' : `
			<transfDom>
				<cpfSubstituido>${cpfSubstituido}</cpfSubstituido>
				<matricAnt>${matriculaAntTransfDom}</matricAnt>
				<dtTransf>${dtTransfTransfDom}</dtTransf>	
			</transfDom>
		`,
		'mudancaCPF': `
			<mudancaCPF>
				<cpfAnt>${cpfAnt}</cpfAnt>
				<matricAnt>${matricAntMudancaCPF}</matricAnt>
				<dtAltCPF>${dtAltCPF}</dtAltCPF>
				<observacao>${observacaoMudancaCPF}</observacao>	
			</mudancaCPF>
		`,
		'afastamento': `
			<afastamento>
				<dtIniAfast>${dtIniAfast}</dtIniAfast>
				<codMotAfast>${codMotAfast}</codMotAfast>	
			</afastamento>
		`,
		'desligamento': `
			<desligamento>
				<dtDeslig>${dtDeslig}</dtDeslig>
			</desligamento>
		`,
		'cessao': `
			<cessao>
				<dtIniCessao>${dtIniCessao}</dtIniCessao>
			</cessao>
		`,
		'localTempDom' : `
			<localTempDom>${localTempDom}</localTempDom>
		`,
		'ideEvento': `
			<ideEvento>
				<indRetif>${indRetif}</indRetif>
				<nrRecibo>${nrRecibo}</nrRecibo>
				<tpAmb>${tpAmb}</tpAmb>
				<procEmi>${procEmi}</procEmi>
				<verProc>${verProc}</verProc>
			</ideEvento>
		`,
		'ideEmpregador': `
			<ideEmpregador>
				<tpInsc>${tpInscIdeEmpregador}</tpInsc>
				<nrInsc>${nrInscIdeEmpregador}</nrInsc>	
			</ideEmpregador>
		`,
		'ideVinculo' : `
			<ideVinculo>
				<cpfTrab>${cpfTrabIdeVinculo}</cpfTrab>
				<matricula>${matriculaIdeVinculo}</matricula>
				<codCateg>${codCategIdeVinculo}</codCateg>
			</ideVinculo>
		`,
		'exMedOcup' : `
			<exMedOcup>
				<tpExameOcup>${tpExameOcup}</tpExameOcup>
			</exMedOcup>
		`,
		'aso': `
			<aso>
				<dtAso>${dtAso}</dtAso>
				<resAso>${resAso}</resAso>
			</aso>
		`,
		'exame' : `
			<exame>
				<dtExm>${dtExm}</dtExm>
				<procRealizado>${procRealizado}</procRealizado>
				<obsProc>${obsProc}</obsProc>
				<ordExame>${ordExame}</ordExame>
				<indResult>${indResult}</indResult>	
			</exame>
			
		`,
		'medico' : `
			<medico>
				<nmMed>${nmMed}</nmMed>
				<nrCRM>${nrCRM}</nrCRM>
				<ufCRM>${ufCRM}</ufCRM>
			</medico>
		`,
		'respMonit' : `
			<respMonit>
				<cpfResp>${cpfResp}</cpfResp>
				<nmResp>${nmResp}</nmResp>
				<nrCRM>${nrCRMRespMonit}</nrCRM>
				<ufCRM>${ufCRMRespMonit}</ufCRM>
			</respMonit>
		`,
    })

	let gruposCompostos = $derived({"trabalhador": `
		<trabalhador>
			<cpfTrab>${cpfTrab}</cpfTrab>
            <nmTrab>${nmTrab}</nmTrab>
            <sexo>${sexo}</sexo>
            <racaCor>${racaCor}</racaCor>
            <estCiv>${estCiv}</estCiv>
            <grauInstr>${grauInstr}</grauInstr>
            <nmSoc></nmSoc>
			${grupos.nascimento}
			<endereco>
				${grupos.brasil}
				${grupos.exterior}
			</endereco>
			${grupos.infoDeficiencia}
			${grupos.dependente}
			${grupos.contato}
		</trabalhador>
	`, 
	"vinculo" : `
		<vinculo>
			<matricula>${matriculaVinc}</matricula>
			<tpRegTrab>${tpRegTrab}</tpRegTrab>
			<tpRegPrev>${tpRegPrev}</tpRegPrev>
			<cadIni>${cadIni}</cadIni>
			<infoRegimeTrab>
				${grupos.infoCeletista}
				${grupos.infoEstatutario}
			</infoRegimeTrab>
			${grupos.infoContrato}
			${grupos.sucessaoVinc}
			${grupos.transfDom}
			${grupos.mudancaCPF}
			${grupos.afastamento}
			${grupos.desligamento}
			${grupos.cessao}
		</vinculo>
	`,})


	let eventos = $derived({'s2200': `
<?xml version="1.0" encoding="UTF-8"?>
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
</eSocial>`})

    let msg = $derived(`
    <eSocial>
		<evtAdmissao>
		${grupos.ideEvento}
		${grupos.ideEmpregador}
        ${gruposCompostos.trabalhador}
		${gruposCompostos.vinculo}
		</evtAdmissao>
    </eSocial>
    `)

    function gerarXML(){
        let formattedXML = xmlFormat.minify(msg, {
            filter: (node) => node.type !== 'Comment',
            collapseContent: true
        })
        console.log(formattedXML); 
    }
</script>

<div class="container">
	<input type="text" placeholder="Nome" class="input" />
	<input type="text" placeholder="CPF do Trabalhador" class="input" />
	<input type="text" placeholder="Número do Trabalhador" class="input" />
	<select class="select" bind:value={sexo} >
		<option disabled selected>Sexo</option>
		<option value="M">M - Masculino</option>
		<option value="F">F - Feminino</option>
	</select>
	<select class="select" bind:value={racaCor} >
		<option disabled selected>Raça/Cor</option>
		<option value="1">1 - Branca</option>
		<option value="2">2 - Preta</option>
		<option value="3">3 - Parda</option>
		<option value="4">4 - Amarela</option>
		<option value="5">5 - Indígena</option>
		<option value="6">6 - Não informado</option>
	</select>
	<select class="select" bind:value={estCiv}>
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

	<!--Informcações relativas ao empregador --> <!-- Grupo :  'ideEmpregador' -->



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