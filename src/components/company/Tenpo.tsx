import { tenpoList } from "../../data/contents"; 

const Tenpo = () => {
    return(
        <div className="p-4 text-center">
            <h2 className="text-4xl font-bold">支店一覧</h2>
            <div>
                {tenpoList.map ((tenpo) => (
                    <div key={tenpo.id}>
                        <h3 className="font-semibold">{tenpo.name}</h3>
                        <table>
                            <tr>
                                <th>担当エリア : </th>
                                <td>{tenpo.area}</td>
                            </tr>
                            <tr>
                                <th>住所 : </th>
                                <td>{tenpo.address}</td>
                            </tr>
                            <tr>
                                <th>電話番号 : </th>
                                <td>{tenpo.phone}</td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tenpo;