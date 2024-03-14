import { useForm, SubmitHandler } from "react-hook-form";
import { Milestone } from "../../../proto/typescript/pb_out/main";
import { useCallback } from "react";

// とりあえず100年分のカレンダーを表示
const FULL_YEAR = 100;
const START_YEAR = 2022;

type Inputs = {
  title: string;
  content: string;
  beginMonth: string;
  endMonth: string;
};

type Props = {
  lifeEvent: Milestone;
  closeModal: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const EditMilestoneForm = ({
  lifeEvent,
  closeModal,
}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    closeModal();
  };

  const YYYYMMDDToYYYYMM = useCallback((dateString: string): string => {
    const [year, month, _] = dateString.split("-");
    const zeroPaddingYear = `0000${year}`.slice(-4);
    const zeroPaddingMonth = `00${month}`.slice(-2);
    return `${zeroPaddingYear}-${zeroPaddingMonth}`;
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="beginMonth">開始</label>
      <input
        type="month"
        id="beginMonth"
        {...register("beginMonth", { required: true })}
        defaultValue={`${YYYYMMDDToYYYYMM(lifeEvent.beginDate)}`}
        min={`${START_YEAR}-01`}
        max={`${START_YEAR + FULL_YEAR}-03`}
        className={`${style.input.default} ${errors.beginMonth && style.input.error}`}
        required
        />

      <label htmlFor="endMonth">終了</label>
      <input
        type="month"
        id="endMonth"
        {...register("endMonth", { required: true })}
        defaultValue={`${YYYYMMDDToYYYYMM(lifeEvent.finishDate)}`}
        min={`${START_YEAR}-01`}
        max={`${START_YEAR + FULL_YEAR}-03`}
        className={`${style.input.default} ${errors.endMonth && style.input.error}`}
        required
      />
      <label htmlFor="milestoneTitle">タイトル</label>
      <input
        id={"milestoneTitle"}
        defaultValue={lifeEvent.title}
        placeholder="例) マネージャーとしてチームをリードする"
        {...register("title", { required: true })}
        className={`${style.input.default} ${errors.title && style.input.error}`}
      />

      <label htmlFor="milestoneContent">内容</label>
      <textarea
        id={"milestoneContent"}
        {...register("content", { required: true })}
        className={`${style.input.default} leading-[500%]`}
        >
        {lifeEvent.content}
      </textarea>
      <input type="submit" />
    </form>
  );
};

export default EditMilestoneForm;

const style = {
  input: {
    default: "border",
    error: "border-red-600"
  },
};
