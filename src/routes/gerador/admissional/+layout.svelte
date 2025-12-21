<script>
	let indRetif = '';
	let nrRecibo = '';
	let tpAmb = '';
	let procEmi = '';
	let verProc = '';
	let tpInsc = '';
	let nrInsc = '';
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
	function xmlS2200() {
		let msg = `<?xml version="1.0" encoding="UTF-8"?>
<eSocial xmlns="http://www.esocial.gov.br/schema/evt/evtAdmissao/v_S_01_03_00">
    <evtAdmissao>
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
</script>

<div id="container">
	<input type="text" placeholder="Nome" class="input" />
</div>

<slot></slot>

<style>
	#container {
		display: flex;
		margin: auto;
		width: 50%;
		justify-items: center;
	}
</style>
