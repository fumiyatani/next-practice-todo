export default function TodoDetail(
    {
        params,
    }: {
        params: { id: string }
    }) {
    const id = params.id;
    return <h1>ここには Todo の詳細が表示されます。 実際に受け取った id: {id}</h1>
}