export default function TimeTablePage({ params }: any) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="table-container flex flex-col gap-5 border">
        <p className="flex gap-5 text-2xl font-bold items-center justify-center">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
        </p>
        <div className="time-container border">
          <div className="time-lable flex flex-col">
            
          </div>
        </div>
      </div>
    </div>
  );
}
