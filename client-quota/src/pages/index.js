import InputGroupLink from "@/components/teams/createForm/InputGroupLink";
import InputText from "@/components/teams/createForm/InputText";
import InputTitle from "@/components/teams/createForm/InputTitle";

export default function Home() {
  return (
    <>
    <h1>Hello!</h1>
    <InputTitle>그룹 이름</InputTitle>
    <InputText name="teamName" placeholder="이름을 입력하세요."></InputText>


    <InputTitle>그룹 링크</InputTitle>
    <InputGroupLink name="teamUrl" placeholder="groupexample"/>
    </>
  )
}
