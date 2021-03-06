<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use DataTables;
use Validator;
use DB;
use Auth;

class KtpController extends Controller
{
    protected $user;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->user = Auth::check() && Auth::user()->isAdmin();

            return $next($request);
        });
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pelayanan.ktp-crud.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'no_kk'    => 'required|numeric',
            'nik'    => 'required|numeric',
            'nama'   => 'required',
            'jenis_kelamin' => 'required',
            'tempat_lahir' => 'required',
            'tanggal_lahir' => 'required',
            'kewarganegaraan' => 'required',
            'gol_darah' => 'required',
            'agama' => 'required',
            'status_perkawinan' => 'required',
            'pendidikan' => 'required',
            'pekerjaan' => 'required',
            'nama_ayah' => 'required',
            'nama_ibu' => 'required',
            'alamat' => 'required',
            'rt' => 'required',
            'rw' => 'required',
            'kelurahan' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 400);
        } else {
            DB::table('ktp')->insertGetId([
                'no_kk'    => $request->no_kk,
                'nik' => $request->nik,
                'nama' => $request->nama,
                'jenis_kelamin' => $request->jenis_kelamin,
                'tempat_lahir' => $request->tempat_lahir,
                'tanggal_lahir' => $request->tanggal_lahir,
                'kewarganegaraan' => $request->kewarganegaraan,
                'gol_darah' => $request->gol_darah,
                'agama' => $request->agama,
                'status_perkawinan' => $request->status_perkawinan,
                'pendidikan' => $request->pendidikan,
                'pekerjaan' => $request->pekerjaan,
                'nama_ayah' => $request->nama_ayah,
                'nama_ibu' => $request->nama_ibu,
                'alamat' => $request->alamat,
                'rt' => $request->rt,
                'rw' => $request->rw,
                'kelurahan' => $request->kelurahan,
                'status' => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'user_id' => Auth::id()
            ]);

            DB::table('logs')->insertGetId([
                'user_id' => Auth::id(),
                'user_name' => Auth::user()->name,
                'activity' => Auth::user()->name . ' telah menambahkan data pemohon E-KTP dengan NIK ' . $request->nik,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);

            return response()->json(['message' => 'stored']);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'no_kk'    => 'required|numeric',
            'nik'    => 'required|numeric',
            'nama'   => 'required',
            'jenis_kelamin' => 'required',
            'tempat_lahir' => 'required',
            'tanggal_lahir' => 'required',
            'kewarganegaraan' => 'required',
            'gol_darah' => 'required',
            'agama' => 'required',
            'status_perkawinan' => 'required',
            'pendidikan' => 'required',
            'pekerjaan' => 'required',
            'nama_ayah' => 'required',
            'nama_ibu' => 'required',
            'alamat' => 'required',
            'rt' => 'required',
            'rw' => 'required',
            'kelurahan' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 400);
        } else {
            DB::table('ktp')
                ->where('id', '=', $request->id)
                ->update([
                    'no_kk' => $request->no_kk,
                    'nik' => $request->nik,
                    'nama' => $request->nama,
                    'jenis_kelamin' => $request->jenis_kelamin,
                    'tempat_lahir' => $request->tempat_lahir,
                    'tanggal_lahir' => $request->tanggal_lahir,
                    'kewarganegaraan' => $request->kewarganegaraan,
                    'gol_darah' => $request->gol_darah,
                    'agama' => $request->agama,
                    'status_perkawinan' => $request->status_perkawinan,
                    'pendidikan' => $request->pendidikan,
                    'pekerjaan' => $request->pekerjaan,
                    'nama_ayah' => $request->nama_ayah,
                    'nama_ibu' => $request->nama_ibu,
                    'alamat' => $request->alamat,
                    'rt' => $request->rt,
                    'rw' => $request->rw,
                    'kelurahan' => $request->kelurahan,
                    'status' => $request->status,
                    'updated_at' => Carbon::now(),
                    'user_id' => Auth::id()
                ]);
                
                DB::table('logs')->insertGetId([
                    'user_id' => Auth::id(),
                    'user_name' => Auth::user()->name,
                    'activity' => Auth::user()->name . ' telah merubah data pemohon E-KTP dengan NIK ' . $request->nik,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);

            return response()->json(['message' => 'updated']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        DB::table('ktp')->where('id', '=', $request->id)->delete();

        DB::table('logs')->insertGetId([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()->name,
            'activity' => Auth::user()->name . ' telah menghapus data pemohon E-KTP dengan NIK ' . $request->nik,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return response()->json(['message' => 'deleted']);
    }

    /**
     * Get all data and return to json.
     *
     * @return \Illuminate\Http\Response
     */
    public function getKtpData(Request $request)
    {
        $ktps = DB::table('ktp')->select([
            'id', 'no_kk', 'nik', 'nama', 'jenis_kelamin', 'tempat_lahir',
            'tanggal_lahir', 'kewarganegaraan', 'gol_darah', 
            'agama', 'status_perkawinan', 'pendidikan', 'pekerjaan',
            'nama_ayah', 'nama_ibu', 'alamat', 'rt', 'rw', 
            'kelurahan', 'status', 'created_at', 'updated_at' ,'user_id'
        ]);

        return DataTables::of($ktps)
                ->filter( function ($query) use ($request) {
                    if ($request->input('no_kk')) {
                        $query->where('no_kk', 'like', "%{$request->no_kk}%");
                    }
                    if ($request->input('nik')) {
                        $query->where('nik', 'like', "%{$request->nik}%");
                    }
                    if ($request->input('nama')) {
                        $query->where('nama', 'like', "%{$request->nama}%");
                    }
                    if ($request->input('jenis_kelamin')) {
                        $query->where('jenis_kelamin', '=', $request->jenis_kelamin);
                    }
                    if ($request->input('tempat_lahir')) {
                        $query->where('tempat_lahir', 'like', "%{$request->tempat_lahir}%");
                    }
                    if ($request->input('kewarganegaraan')) {
                        $query->where('kewarganegaraan', '=', $request->kewarganegaraan);
                    }
                    if ($request->input('gol_darah')) {
                        $query->where('gol_darah', '=', $request->gol_darah);
                    }
                    if ($request->input('agama')) {
                        $query->where('agama', '=', $request->agama);
                    }
                    if ($request->input('status_perkawinan')) {
                        $query->where('status_perkawinan', '=', $request->status_perkawinan);
                    }
                    if ($request->input('pendidikan')) {
                        $query->where('pendidikan', '=', $request->pendidikan);
                    }
                    if ($request->input('pekerjaan')) {
                        $query->where('pekerjaan', '=', $request->pekerjaan);
                    }
                    if ($request->input('rt')) {
                        $query->where('rt', '=', $request->rt);
                    }
                    if ($request->input('rw')) {
                        $query->where('rw', '=', $request->rw);
                    }
                    if ($request->has('status')) {
                        $query->where('status', '=', $request->status);
                    }
                    if ($request->input('kelurahan')) {
                        $query->where('kelurahan', '=', $request->kelurahan);
                    }
                    if ($request->input('tanggal_dari') && $request->input('tanggal_sampai')) {
                        $query->whereBetween('created_at', [$request->tanggal_dari, $request->tanggal_sampai]);
                    }
                    if ($request->input('tanggal_lahir_dari') && $request->input('tanggal_lahir_sampai')) {
                        $query->whereBetween('tanggal_lahir', [$request->tanggal_lahir_dari, $request->tanggal_lahir_sampai]);
                    }
                })
                ->editColumn('created_at', function ($query) {
                    return $query->created_at ? with(new Carbon($query->created_at))->format('Y/m/d') : '';
                })
                ->editColumn('status', function ($query) {
                    if ($query->status == 0)
                        return 'Belum Diproses';
                    else if ($query->status == 1)
                        return 'On Progress';
                    else
                        return 'Telah Diproses';
                })
                ->addColumn('action', function($ktp) {
                    return '
                    <button 
                    class="btn btn-warning btn-xs ktp-edit"
                    data-toggle="modal"
                    data-target="#ktp-edit-modal"
                    data-id="'. $ktp->id .'"
                    data-no_kk="'. $ktp->no_kk .'"
                    data-nik="'. $ktp->nik .'"
                    data-nama="'. $ktp->nama .'"
                    data-jenis_kelamin="'. $ktp->jenis_kelamin .'"
                    data-tempat_lahir="'. $ktp->tempat_lahir .'"
                    data-tanggal_lahir="'. $ktp->tanggal_lahir .'"
                    data-kewarganegaraan="'. $ktp->kewarganegaraan .'"
                    data-gol_darah="'. $ktp->gol_darah .'"
                    data-agama="'. $ktp->agama .'"
                    data-status_perkawinan="'. $ktp->status_perkawinan .'"
                    data-pendidikan="'. $ktp->pendidikan .'"
                    data-pekerjaan="'. $ktp->pekerjaan .'"
                    data-nama_ayah="'. $ktp->nama_ayah .'"
                    data-nama_ibu="'. $ktp->nama_ibu .'"
                    data-alamat="'. $ktp->alamat .'"
                    data-rt="'. $ktp->rt .'"
                    data-rw="'. $ktp->rw .'"
                    data-kelurahan="'. $ktp->kelurahan .'"
                    data-status="'. $ktp->status .'"
                    data-user_id="'. $ktp->user_id .'"
                    ><i class="md-edit"></i></button>
                    <button
                    class="btn btn-danger btn-xs ktp-delete"
                    data-id="'. $ktp->id .'"
                    data-nik="'. $ktp->nik .'"
                    ><i class="md-delete"></i></button>';                  
                })
                ->make(true);
    }

    /**
    * Generate E-KTP invoice.
    *
    * @return \Illuminate\Http\Response
    */
    public function cetakResiKtp(Request $request) {
        
        $query = DB::table('ktp')->where('nik', '=', $request->nik)->first();

        return view('admin.reports.resi.resiktp', [
            'ktp' => $query
        ]);
    }

    /**
    * Generate dynamic reports
    *
    * @return \Illuminate\Http\Response
    */
    public function generateKtpReports(Request $request) {
        
        $query = DB::table('ktp')->select(['no_kk', 'nik', 'nama', 'jenis_kelamin', 'alamat', 'rt', 'rw', 'kelurahan']);

        if ($request->input('no_kk')) {
            $query->where('no_kk', 'like', "%{$request->no_kk}%");
        }
        if ($request->input('nik')) {
            $query->where('nik', 'like', "%{$request->nik}%");
        }
        if ($request->input('nama')) {
            $query->where('nama', 'like', "%{$request->nama}%");
        }
        if ($request->input('jenis_kelamin')) {
            $query->where('jenis_kelamin', '=', $request->jenis_kelamin);
        }
        if ($request->input('tempat_lahir')) {
            $query->where('tempat_lahir', 'like', "%{$request->tempat_lahir}%");
        }
        if ($request->input('kewarganegaraan')) {
            $query->where('kewarganegaraan', '=', $request->kewarganegaraan);
        }
        if ($request->input('gol_darah')) {
            $query->where('gol_darah', '=', $request->gol_darah);
        }
        if ($request->input('agama')) {
            $query->where('agama', '=', $request->agama);
        }
        if ($request->input('status_perkawinan')) {
            $query->where('status_perkawinan', '=', $request->status_perkawinan);
        }
        if ($request->input('pendidikan')) {
            $query->where('pendidikan', '=', $request->pendidikan);
        }
        if ($request->input('pekerjaan')) {
            $query->where('pekerjaan', '=', $request->pekerjaan);
        }
        if ($request->input('rt')) {
            $query->where('rt', '=', $request->rt);
        }
        if ($request->input('rw')) {
            $query->where('rw', '=', $request->rw);
        }
        if ($request->input('status')) {
            $query->where('status', '=', $request->status);
        }
        if ($request->input('kelurahan')) {
            $query->where('kelurahan', '=', $request->kelurahan);
        }
        if ($request->input('tanggal_dari') && $request->input('tanggal_sampai')) {
            $query->whereBetween('created_at', [$request->tanggal_dari, $request->tanggal_sampai]);
        }
        if ($request->input('tanggal_lahir_dari') && $request->input('tanggal_lahir_sampai')) {
            $query->whereBetween('tanggal_lahir', [$request->tanggal_lahir_dari, $request->tanggal_lahir_sampai]);
        }
        
        return view('admin.reports.a4.dynamic', [
            'ktp' => $query->get(),
            'count' => $query->count()
        ]);
    }

    /**
    * Archive E-KTP data
    *
    * @return \Illuminate\Http\Response
    */
    public function generateKtpArchives(Request $request) {
        $ktp = DB::table('ktp')->where('created_at', 'like', "%{$request->tanggal}%")->orderBy('created_at', 'ASC')->get();
        $formattedDate = Carbon::parse($request->tanggal)->format('d F Y');

        return view('admin.reports.a4.archive', ['ktp' => $ktp, 'formattedDate' => $formattedDate]);
    }
}
