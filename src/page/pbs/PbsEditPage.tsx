import React from "react";
import { useNavigate, useParams } from "react-router";
/** Api */
import { useEditPBSMutation, usePBSDetailQuery } from "@/api/PBSQuery.ts";
/** Hook */
import { useForm } from "react-hook-form";
import useSnack from "@/hook/useSnack.ts";
/** Cookie */
import { getCookie } from "@/libs/cookie.ts";
/** Component */
import EditBook from "@components/edit/EditBook.tsx";
import EditVerse from "@components/edit/EditVerse.tsx";
import EditContent from "@components/edit/EditContent.tsx";
import EditShowData from "@components/edit/EditShowData.tsx";
import EditButtonGroup from "@components/edit/EditButtonGroup.tsx";
/** Type */
import Bible from "@type/Bible";
/** Style */
import { Container } from "@mui/material";

const PbsEditPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  /** Api */
  const { data, isLoading } = usePBSDetailQuery(id as string);
  const { mutate } = useEditPBSMutation();
  /** Hook */
  const { handleOpenSnack } = useSnack();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: id,
      userId: getCookie("userId"),
      userName: sessionStorage.getItem("userName"),
    },
  });

  const handleEditPbs = (data: Bible.Edit) => {
    mutate(data, {
      onSuccess: () => {
        handleOpenSnack({ message: "수정 완료", severity: "info" });
        navigate(-1);
      },
    });
  };

  if (isLoading) return <div>edit</div>;

  return (
    <Container sx={{ m: "80px auto", padding: 0, boxSizing: "border-box" }}>
      <form onSubmit={handleSubmit(handleEditPbs)}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EditBook setValue={setValue} value={data.book} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EditShowData setValue={setValue} value={data.showData} />

          <div>
            <EditVerse
              register={register}
              value={data.chapter}
              name={"chapter"}
              content={"장"}
              errors={errors?.chapter?.message}
            />

            <EditVerse
              register={register}
              value={data.startVerse}
              name={"startVerse"}
              content={"절"}
              errors={errors?.startVerse?.message}
            />

            <EditVerse
              register={register}
              value={data.endVerse}
              name={"endVerse"}
              content={"절"}
              errors={errors?.endVerse?.message}
            />
          </div>
        </div>

        <hr style={{ marginTop: "10px", border: "1px solid black" }} />

        <EditContent register={register} value={data.content} />

        <EditButtonGroup />
      </form>
    </Container>
  );
};

export default PbsEditPage;
