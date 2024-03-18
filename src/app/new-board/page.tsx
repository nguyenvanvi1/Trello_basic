'use client';
import {createBoard} from "@/app/actions/boardActions";
import {redirect} from "next/navigation";

export default function NewBoardPage() {
  async function handleNewBoardSubmit(formData: FormData) {
    const boardName = formData.get('name')?.toString() || '';
    const roomInfo = await createBoard(boardName);
    if (roomInfo) {
      redirect(`/boards/${roomInfo.id}`);
    }
  }
  return (
    <div>
      <form action={handleNewBoardSubmit} className="max-w-xs block">
        <h1 className="text-2xl mb-4 text-white">Create New Board</h1>
        <input type="text" name="name" placeholder="Board Name"/>
        <button type="submit" className="mt-2 w-full">Create Board</button>
      </form>
    </div>
  );
}